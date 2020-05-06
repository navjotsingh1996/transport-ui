import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import InvoiceDialogContent from './InvoiceDialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const DIALOG_TYPE = {'view':'view', 'create':'create', 'edit':'edit'};

export default function InvoiceDialog(props) {
  const { readOnly, invoice, open, handleOnClose, type, onSubmit } = props;
  const [newInvoice, setNewInvoice] = React.useState({});
  const getIcon = () => {
    let icon = '';
    switch(type){
      case DIALOG_TYPE.view:
        icon = <VisibilityIcon />;
        break;
      case DIALOG_TYPE.edit:
        icon = <EditIcon />;
        break;
      default:
        icon = <AddIcon />;
    }
    return (
      <ListItemIcon>
        {icon}
      </ListItemIcon>
    );
  };

  const getTitleText = () => {
    let text = '';
    switch(type){
      case DIALOG_TYPE.view:
        text = 'View Invoices';
        break;
      case DIALOG_TYPE.edit:
        text = 'Edit Invoices';
        break;
      default:
        text = 'Create Invoice';
        break;
    }
    return (
      <Typography component='div' variant={'h6'}>
        {text}
      </Typography>
    )
  };

  const getButtonText = () => {
    switch(type){
      case DIALOG_TYPE.view:
        return '';
      case DIALOG_TYPE.edit:
        return 'Edit';
      default:
        return 'Create';
    }
  };

  const mkTitle = () => {
    return (
        <Toolbar disableGutters variant={'dense'}>
          {getIcon()}
          {getTitleText()}
        </Toolbar>
    )
  };

  const gatherChanges = (id, invoiceDate, loadNumber, billTo, stops, balances) => {
    const invoice = {
      id,
      invoiceDate,
      loadNumber,
      billTo,
      stops,
      balances
    };
    setNewInvoice(invoice);
  };

  return (
    <Dialog
      open={open}
      scroll={'paper'}
      onClose={() => handleOnClose() }
      fullWidth={true}
      maxWidth={'md'}
    >
      <DialogTitle style={{ backgroundColor: '#303f9f' }}  id="invoice-dialog-title" color={'primary'}>
        {mkTitle()}
        </DialogTitle>
      <DialogContent dividers>
        <div key={'invoice-content'}>
          <InvoiceDialogContent gatherChanges={gatherChanges} readOnly={readOnly} invoice={invoice || {}} />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose} color={'secondary'}>
          Cancel
        </Button>
        {getButtonText ? <Button onClick={() => onSubmit(newInvoice)} color={'secondary'}>
          {getButtonText()}
        </Button> : ''}
      </DialogActions>
      </Dialog>
  )
}