import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DownloadIcon from '@material-ui/icons/GetApp';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.primary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));

/**
 * Header for the data grid, includes all of the actions
 */
export default function DataGridHeader(props) {
  const classes = useToolbarStyles();
  const { title, selected, onDelete, onCreate, onEdit, onDownload } = props;
  return (
    <Toolbar className={clsx(classes.root, {
      [classes.highlight]: selected.length > 0,
    })}>
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        {title}
      </Typography>
      {selected.length > 0 ?
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          {selected.length} Selected
        </Typography> : null}
      <Tooltip title="Create New Invoice">
        <IconButton aria-label="create" onClick={() => onCreate(selected)}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit Selected Invoices">
        <span>
        <IconButton aria-label="edit" onClick={() => onEdit(selected)} disabled={selected.length === 0 || selected.length > 1}>
          <EditIcon />
        </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Delete selected Invoices">
        <span>
        <IconButton aria-label="delete" onClick={() => onDelete(selected)} disabled={selected.length === 0}>
          <DeleteIcon />
        </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Download Table">
        <IconButton aria-label="download" onClick={() => onDownload(selected)} disabled={selected.length === 0}>
          <DownloadIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  )
}

DataGridHeader.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDownload: PropTypes.func.isRequired,
};