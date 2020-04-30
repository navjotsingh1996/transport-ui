import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function DeleteDialog(props) {
  const { open, onClose, onDelete, list, itemLabel } = props;
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
            return <li key={item} id={item}>{itemLabel}: {item}</li>
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

DeleteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  itemLabel: PropTypes.string.isRequired,
}
