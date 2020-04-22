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

  React.useEffect(() => {
    dispatch(getInvoices());
  }, [dispatch]);

  const getInvoice = (invoiceId) => {
    let invoiceData = {};
    fakeData.forEach((data) => {
      if (data.invoiceNumber === invoiceId) {
        invoiceData = data;
        return 0;
      }
    });
    return invoiceData;
  };

  const getMultipleInvoices = (selected) => {
    return selected.map((sel) => {
      return getInvoice(sel);
    })
  };

  const onView = (e, invoiceId) => {
    e.stopPropagation();
    setDialogState({
      open: true,
      invoices: [getInvoice(invoiceId)],
      readOnly: true,
      type: 'view'
    })
  };

  const onCreate = () => {
    setDialogState({
      open: true,
      invoices: [{}],
      readOnly: false,
      type: 'create',
      onSubmit: onCreateSubmit
    });
  };

  const onEdit = (selected) => {
    setDialogState({
      open: true,
      invoices: getMultipleInvoices(selected),
      readOnly: false,
      type: 'edit',
      onSubmit: onEditSubmit
    })
  };

  const onEditSubmit = (invoices) => {
    dispatch(editInvoices(invoices))
  }
  ;
  const onCreateSubmit = (invoices) => {
    dispatch(createInvoices(invoices))
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
        data={fakeData}
        onCreate={onCreate}
        onEdit={(selected) => onEdit(selected)}
        onDelete={(selected) => onDelete(selected)}
        onDownload={onDownload}
      />
      <InvoiceDialog
        open={dialogState.open}
        invoices={dialogState.invoices}
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