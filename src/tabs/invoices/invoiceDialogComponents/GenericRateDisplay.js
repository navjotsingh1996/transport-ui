import React from 'react';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'

export default function GenericRateDisplay(props) {
  const { heading, readOnly, value, onChange, objKey, id } = props;

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
        onChange={(e, value) => onChange(value, objKey)}
      />
    );
  };

  return mkTextField()
}