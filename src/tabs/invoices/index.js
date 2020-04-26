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

export default function InvoicesTab() {
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
  const data = useSelector(state => state.invoice.invoices);

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
    console.log(dialogState);
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
  console.log(dialogState);

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
      />
    </div>
  )
}