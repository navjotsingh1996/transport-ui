import React from 'react';
import PropTypes from 'prop-types';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'

function GenericRateDisplay(props) {
  const { heading, readOnly, value, onChange, id } = props;

  const mkTextField = () => {
    if (readOnly) {
      return (
        <div id={`${id}-div-${value}`} key={id}>
          {heading ? (<div>{heading} $ {value.toFixed(2)}</div>) : value}
        </div>
      );
    }
    return (
      <CurrencyTextField
        id={`${id}-textfield-${value}`}
        label={heading}
        value={value}
        currencySymbol="$"
        outputFormat="number"
        style={{width: '100%'}}
        onChange={(e, value) => onChange(value)}
      />
    );
  };

  return mkTextField()
}


function areEqual(prev, next) {
  return prev.readOnly === next.readOnly && prev.value === next.value;
}

GenericRateDisplay.propTypes = {
  readOnly: PropTypes.bool.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  heading: PropTypes.string,
};


export default React.memo(GenericRateDisplay, areEqual);