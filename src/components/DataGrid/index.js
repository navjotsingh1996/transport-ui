import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import DataGridHeader from './DataGridHeader';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  checkbox: {}
}));

export default function DataTable(props) {
  const classes = useStyles();
  const {columns, title, data, options, onDelete, onCreate, onEdit, onGenerate, onDownload} = props;
  const rowKey = options.uniqueDataKeyAccessor;
  const [selected, setSelected] = React.useState([]);

  const mkCell = (column, data) => {
    return column.customBody ? column.customBody(data[column.accessor]) :
      data[column.accessor];
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n[rowKey]);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <DataGridHeader
          title={title}
          selected={selected}
          onCreate={onCreate}
          onEdit={onEdit}
          onGenerate={onGenerate}
          onDelete={onDelete}
          onDownload={onDownload}
        />
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size={'small'}
            aria-labelledby="tableTitle"
          >
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={selected.length > 0 && selected.length < data.length}
                    checked={data.length > 0 && selected.length === data.length}
                    onChange={handleSelectAllClick}
                    color={'primary'}
                    inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                {columns.map((col) => <TableCell key={col.label}>{col.label}</TableCell> )}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => {
                const isItemSelected = isSelected(row[rowKey]);
                return (
                <TableRow
                  key={row.invoiceNumber}
                  hover
                  color={'primary'}
                  onClick={(event) => handleClick(event, row[rowKey])}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  selected={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isItemSelected}
                      color={'secondary'}
                      inputProps={{ 'aria-labelledby': `enhanced-table-checkbox-${index}` }}
                    />
                  </TableCell>
                  {columns.map((col) => <TableCell key={col.label}>{mkCell(col, row)}</TableCell>)}
                </TableRow>
              )})}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )

}