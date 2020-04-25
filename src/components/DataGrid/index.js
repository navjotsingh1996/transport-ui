import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableSortLabel from '@material-ui/core/TableSortLabel';
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
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function DataTable(props) {
  const classes = useStyles();
  const {columns, title, data, options, onDelete, onCreate, onEdit, onDownload} = props;
  const rowKey = options.uniqueDataKeyAccessor;
  const [selected, setSelected] = React.useState([]);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('invoiceNumber');

  const mkCell = (column, data) => {
    return column.customBody ? column.customBody(data[column.accessor]) :
      data[column.accessor];
  };

  /**
   * sorts the array using whatever coparotor we use
   * @param array Data being sorted
   * @param comparator Comparator being used on the data
   * @returns {*}
   */
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  /**
   *
   * @param a
   * @param b
   * @param orderBy
   * @returns {number}
   */
  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  /**
   * This is the comparotor that is run by each row to determine the order of the rows
   * @param order Ascending or descending
   * @param orderBy The column we will be sorting by
   * @returns {function(*=, *=): number}
   */
  const getComparator = (order, orderBy) => {
    let columnIndex = 0;
    columns.forEach((c, i) => {
      if (c.accessor === orderBy) {
        columnIndex = i;
        return 0;
      }
    });
    const comparator = columns[columnIndex].sortFunction ?
      columns[columnIndex].sortFunction : descendingComparator;
    return order === 'desc'
      ? (a, b) => comparator(a, b, orderBy)
      : (a, b) => -comparator(a, b, orderBy);
  };

  /**
   * Handles the sorting request.
   * @param event Header cell click event
   * @param property Column to be sorted
   */
  const handleRequestSort = (event, property) => {
    // If we are sorting by this column already we switch the sort
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  /**
   * Handles header cell clicks (which triggers sorting)
   * @param property is the column that is to be sorted
   * @returns {Function}
   */
  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  /**
   * End sorting functions
   */

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
          onDelete={onDelete}
          onDownload={onDownload}
        />
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size={'small'}
            padding={'default'}
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
                {columns.map((col) => {
                  return col.sort ? (
                    <TableCell key={col.label}>
                      <TableSortLabel
                        active={orderBy === col.accessor}
                        direction={orderBy === col.accessor ? order : 'asc'}
                        onClick={createSortHandler(col.accessor)}
                      >
                        {col.label}
                        {orderBy === col.accessor ? (
                          <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>
                  ) : (<TableCell key={col.label}>{col.label}</TableCell>)})}
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(data, getComparator(order, orderBy)).map((row, rowIndex) => {
                const isItemSelected = isSelected(row[rowKey]);
                return (
                <TableRow
                  key={`${row.id}-${rowIndex}`}
                  hover
                  color={'secondary'}
                  onClick={(event) => handleClick(event, row[rowKey])}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  selected={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isItemSelected}
                      color={'primary'}
                      inputProps={{ 'aria-labelledby': `enhanced-table-checkbox-${rowIndex}` }}
                    />
                  </TableCell>
                  {columns.map((col, colIndex) => (
                    <TableCell key={`${row.id}-${rowIndex}-${colIndex}`}>
                      {mkCell(col, row)}
                      </TableCell>
                  ))}
                </TableRow>
              )})}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )

}