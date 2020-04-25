import React from 'react';
import DataTable from '../../components/DataGrid';
import InvoiceDialog from './InvoiceDialog';
import { columns, options } from './dataGridConfig'
import fakeData from './fakeData';
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
  // const invoicesState = useSelector(state => state.invoices);
  const dispatch = useDispatch();
  const defaultInvDialogState = {
    open: false,
    invoices: [],
    readOnly: true
  };
  const [dialogState, setDialogState] = React.useState(defaultInvDialogState);
  const [deleteDialog, setDeleteDialog] = React.useState({
    open: false,
    invoiceIds: []
  });
  const invoiceFileData = useSelector(state => state.invoice.invoiceFile);
  const createInProg = useSelector(state => state.invoice.invoicesCreateInProg);
  const reducerData = useSelector(state => state.invoice.invoices);
  const data = reducerData.length === 0 ? [] : reducerData;
  React.useEffect(() => {
    dispatch(getInvoices());
  }, [dispatch]);

  React.useEffect(() => {
    if (!createInProg && invoiceFileData) {
      downloadFile('test.pdf', {type: 'application/pdf'}, invoiceFileData);
    }
  }, [createInProg]);

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
      type: 'create',
      onSubmit: onCreateSubmit
    });
  };

  // On Edit we only allow up to one selection
  const onEdit = (selected) => {
    setDialogState({
      open: true,
      invoice: getInvoice(selected[0]),
      readOnly: false,
      type: 'edit',
      onSubmit: onEditSubmit
    })
  };

  const onEditSubmit = (invoice) => {
    dispatch(editInvoices(invoice))
  }
  ;
  const onCreateSubmit = (invoice) => {
    dispatch(createInvoices(invoice))
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
      open: false,
    });
  };

  const onDeleteConfirm = () => {
    dispatch(deleteInvoices(deleteDialog.invoiceIds))
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
        onSubmit={(inv) => dialogState.onSubmit(inv)}
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