import React from 'react';
import DataTable from '../../components/DataGrid';
import InvoiceDialog from './InvoiceDialog';
import { columns, options } from './dataGridConfig'
import Link from '@material-ui/core/Link';
import DeleteDialog from "../../components/DeleteDialog";
import {
  getInvoices,
  editInvoices,
  createInvoices,
  deleteInvoices
} from "./invoicesProvider/actions";
import { useSelector, useDispatch } from 'react-redux';
import { downloadFile } from "../../utils/utils";
import { useSnackbar } from 'notistack';

export default function InvoicesTab() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [dialogState, setDialogState] = React.useState({
    open: false,
    readOnly: true
  });
  const [deleteDialog, setDeleteDialog] = React.useState({
    open: false,
    invoiceIds: []
  });
  const invoiceFileData = useSelector(state => state.invoice.invoiceFile);
  const createInProg = useSelector(state => state.invoice.invoicesCreateInProg);
  const editInProg = useSelector(state => state.invoice.invoicesEditInProg);
  const deleteInProg = useSelector(state => state.invoice.invoicesDeleteInProg);
  const createErr = useSelector(state => state.invoice.invoicesCreateErr);
  const editErr = useSelector(state => state.invoice.invoicesEditErr);
  const deleteErr = useSelector(state => state.invoice.invoicesDeleteErr);
  const data = useSelector(state => state.invoice.invoices);

  const successSnackbar = (msg) => {
    enqueueSnackbar(msg, {
      variant: 'success',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
    });
  };

  React.useEffect(() => {
    if (!deleteInProg && !deleteErr) {
      successSnackbar('Deletion was a success');
    }
  }, [deleteInProg]);

  React.useEffect(() => {
    if (!editInProg && !editErr && invoiceFileData) {
      successSnackbar('Invoice edit action was successful, your file will be in the downloads folder');
    }
  }, [editInProg]);

  React.useEffect(() => {
    if (!createInProg && !createErr && invoiceFileData) {
      successSnackbar('Invoice create action was successful, your file will be in the downloads folder');
    }
  }, [createInProg]);

  React.useEffect(() => {
    dispatch(getInvoices());
  }, [dispatch]);

  React.useEffect(() => {
    if (!createInProg && invoiceFileData) {
      downloadFile('test.pdf', {type: 'application/pdf'}, invoiceFileData);
    }
  }, [createInProg]);

  React.useEffect(() => {
    if (!editInProg && invoiceFileData) {
      downloadFile('test.pdf', {type: 'application/pdf'}, invoiceFileData);
    }
  }, [editInProg]);

  const getInvoice = (invoiceId) => {
    let invoiceData = {};
    data.forEach((data) => {
      if (data.id === invoiceId) {
        invoiceData = data;
        return 0;
      }
    });
    return invoiceData;
  };

  const onView = (e, invoiceId) => {
    e.stopPropagation();
    setDialogState({
      open: true,
      invoice: getInvoice(invoiceId),
      readOnly: true,
      type: 'view'
    })
  };

  const onCreate = () => {
    setDialogState({
      open: true,
      invoice: {},
      readOnly: false,
      type: 'create'
    });
  };

  // On Edit we only allow up to one selection
  const onEdit = (selected) => {
    setDialogState({
      open: true,
      invoice: getInvoice(selected[0]),
      readOnly: false,
      type: 'edit'
    })
  };

  const onEditSubmit = (invoice) => {
    dispatch(editInvoices(invoice));
    handleDlgClose();
  };
  const onCreateSubmit = (e, invoice) => {
    dispatch(createInvoices(invoice));
    handleDlgClose();
  };

  const onDelete = (selected) => {
    setDeleteDialog({
      open: true,
      invoiceIds: selected
    });
  };

  const onDeleteCancel = () => {
    setDeleteDialog({
      ...deleteDialog,
      open: false
    });
  };

  const onDeleteConfirm = () => {
    dispatch(deleteInvoices(deleteDialog.invoiceIds));
    setDeleteDialog({
        ...deleteDialog,
      open: false
    });
  };

  const onDownload = (data) => {
 //   console.log(data);
  };

  const handleDlgClose = () => {
    setDialogState({
      ...dialogState,
      open: false,
    });
  };

  const invoiceNumberLink = (content) => {
    if (!content) {
      return '';
    }
    const viewCall = (e) => onView(e, content);
    return <Link color={'textSecondary'} href='#' onClick={(e) => viewCall(e)}>{content}</Link>
  };

  columns[0].customBody = (val) => invoiceNumberLink(val);

  return (
    <div>
      <DataTable
        title='Invoices'
        columns={columns}
        options={options}
        data={data}
        onCreate={onCreate}
        onEdit={(selected) => onEdit(selected)}
        onDelete={(selected) => onDelete(selected)}
        onDownload={onDownload}
      />
      <InvoiceDialog
        open={dialogState.open}
        invoice={dialogState.invoice}
        readOnly={dialogState.readOnly}
        handleOnClose={handleDlgClose}
        onSubmit={(inv) => dialogState.type === 'edit' ? onEditSubmit(inv) : onCreateSubmit(inv) }
        type={dialogState.type}
      />
      <DeleteDialog
        open={deleteDialog.open}
        list={deleteDialog.invoiceIds}
        onClose={onDeleteCancel}
        onDelete={onDeleteConfirm}
        itemLabel={'Invoice Number'}
      />
    </div>
  )
}