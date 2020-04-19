import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function DeleteDialog(props) {
  const { open, onClose, onDelete, list } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle style={{ backgroundColor: '#303f9f' }}  id="invoice-dialog-title">
        Are you sure you want to delete:
      </DialogTitle>
      <DialogContent dividers>
        <ul>
          {list.map((item) => {
            return <li key={item} id={item}>{item}</li>
          })}
        </ul>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color={'secondary'}>Cancel</Button>
        <Button onClick={onDelete} color={'secondary'}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
}