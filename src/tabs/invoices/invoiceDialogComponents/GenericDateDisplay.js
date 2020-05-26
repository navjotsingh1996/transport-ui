import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function GenericDateDisplay(props) {
  const { heading, readOnly, value, onChange, setter, oldObj, objKey, id } = props;
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
          variant="inline"
          format="MM/dd/yyyy"
          disablePast="true"
          margin="normal"
          id={`${id}-date-picker-${value}`}
          label={heading}
          value={value}
          style={{width: '100%'}}
          onChange={ (date) => onChange(date, setter, oldObj, objKey, true)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    );
  };

  return mkTextField()
}

GenericDateDisplay.propTypes = {
  readOnly: PropTypes.bool.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  heading: PropTypes.string,
  setter: PropTypes.func,
  oldObj: PropTypes.any,
  objKey: PropTypes.string
};