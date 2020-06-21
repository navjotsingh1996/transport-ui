import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

function GenericTextDisplay(props) {
  const { heading, readOnly, value, onChange, setter, oldObj, objKey, id, error, helperText } = props;

  /**
   * Displays non-editable values or renders a textfield
   * @returns {*}
   */
  const mkTextField = () => {
    if (readOnly) {
      return (
        <div id={`${id}-div-${value}`} key={id}>
          {heading ? (<div><h3>{heading}:</h3>{value}</div>) : value}
        </div>
      );
    }

    return (
      <TextField
        id={`${id}-textfield-${value}`}
        error={error}
        helperText={helperText}
        label={heading}
        value={value}
        style={{width: '100%'}}
        onChange={(e) => onChange(e, setter, oldObj, objKey) }
      />
    );
  };

  return mkTextField()
}

function areEqual(prev, next) {
  if (next.oldObj) {
    return prev.readOnly === next.readOnly && prev.oldObj[prev.objKey] === next.oldObj[next.objKey] &&
      prev.error === next.error && prev.helperText === next.helperText && prev.value === next.value
  }
  return prev.readOnly === next.readOnly && prev.error === next.error && prev.helperText === next.helperText &&
    prev.value === next.value
}

GenericTextDisplay.propTypes = {
  readOnly: PropTypes.bool.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  heading: PropTypes.string,
  setter: PropTypes.func,
  oldObj: PropTypes.any,
  error: PropTypes.bool,
  objKey: PropTypes.string,
  helperText: PropTypes.string
};

export default React.memo(GenericTextDisplay, areEqual);