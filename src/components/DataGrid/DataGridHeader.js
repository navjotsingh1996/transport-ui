import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import BuildIcon from '@material-ui/icons/Build';
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

export default function DataGridHeader(props) {
  const classes = useToolbarStyles();
  const { title, selected, onDelete, onCreate, onEdit, onGenerate, onDownload } = props;
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
      <Tooltip title="Edit Selected Invoices" disabled={selected.length === 0}>
        <IconButton aria-label="edit" onClick={() => onEdit(selected)}>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Generate selected Invoices" disabled={selected.length === 0}>
        <IconButton aria-label="generate" onClick={() => onGenerate(selected)}>
          <BuildIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete selected Invoices" disabled={selected.length === 0}>
        <IconButton aria-label="delete" onClick={() => onDelete(selected)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Download Table">
        <IconButton aria-label="download" onClick={() => onDownload(selected)}>
          <DownloadIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  )
}