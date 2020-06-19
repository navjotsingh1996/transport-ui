import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function ErrorDialog(props) {
  const { open, onClose, title } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle style={{ backgroundColor: '#CC0000' }}  id="invoice-dialog-title">
        {title}
      </DialogTitle>
      <DialogActions>
        <Button onClick={onClose} color={'secondary'}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

ErrorDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
