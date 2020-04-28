import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import DataGridHeader from './DataGridHeader';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 900,
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filters, setFilters] = React.useState({});

  React.useEffect(() => {
    const initializeFilters = {};
    columns.forEach((col) => {
      const uniqueId = col.key || col.accessor;
      initializeFilters[uniqueId] = '';
    });
    setFilters(initializeFilters);
  }, [columns]);

  React.useEffect(() => {
    updateSelection();
  }, [data]);

  const mkCell = (column, data) => {
    return column.customBody ? column.customBody(data[column.accessor]) :
      data[column.accessor];
  };

  /**
   * sorts the array using whatever comparator we use
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

  const simpleStringFilter = (element, filter) => {
    return element.toString().includes(filter);
  };


  const filterTable = () => {
    const stabilizedThis = data.map((el, index) => [el, index]);
    const filteredColData = [];
    columns.forEach((col) => {
      const uniqueId = col.key || col.accessor;
        if (col.filter) {
          filteredColData.push(stabilizedThis.filter(val => {
            return col.customFilter ? col.customFilter(val[0][col.accessor], filters[uniqueId]) :
            simpleStringFilter(val[0][col.accessor], filters[uniqueId]);
          }));
        }
    });
    return filteredColData.reduce((a, b) => b.filter(Set.prototype.has, new Set(a))).map((res) => res[0]);
  };

  const updateSelection = () => {
    const updatedSelected = [];
    selected.forEach((s) => {
      if (data.some(d => d.id === s)) {
        updatedSelected.push(s);
      }
    });
    setSelected(updatedSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelectedIds = data.map((n) => n[rowKey]);
      setSelected(newSelectedIds);
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

  const onFilterChange = (value, key) => {
    setFilters({
      ...filters,
      [key]: value
    });
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const filteredData = filterTable();

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
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <div />
                </TableCell>
                {columns.map((col) => {
                  const uniqueId = col.key || col.accessor;
                  return (
                    <TableCell key={`${col.label}-filter`}>
                      <TextField
                        disabled={!col.filter}
                        value={filters[uniqueId]}
                        onChange={(e) => onFilterChange(e.target.value, uniqueId)}
                      />
                    </TableCell>)})}
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(filteredData, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => {
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
        <TablePagination
          rowsPerPageOptions={[10, 20, 100]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )

}