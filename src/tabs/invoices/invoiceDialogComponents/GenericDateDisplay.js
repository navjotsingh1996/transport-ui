import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

function GenericDateDisplay(props) {
  const { heading, readOnly, value, onChange, id } = props;

  const formatDate = () => {
    const date = new Date(0);
    date.setUTCSeconds(value);
    return date;
  };
  const mkTextField = () => {
    if (readOnly) {
      return(
        <div id={`${id}-div-${value}`} key={id}>
          {heading ? (<div><h3>{heading}:</h3>{value}</div>) : value}
        </div>
      );
    }
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          animateYearScrolling
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id={`${id}-date-picker-${value}`}
          label={heading}
          value={formatDate()}
          style={{width: '100%'}}
          onChange={ (date) => {
            onChange(new Date(date).getTime()/1000)
          }}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    );
  };

  return mkTextField()
}

function areEqual(prev, next) {
  return prev.readOnly === next.readOnly && prev.error === next.error && prev.helperText === next.helperText &&
    prev.value === next.value
}

GenericDateDisplay.propTypes = {
  readOnly: PropTypes.bool.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  heading: PropTypes.string,
};

export default React.memo(GenericDateDisplay, areEqual);