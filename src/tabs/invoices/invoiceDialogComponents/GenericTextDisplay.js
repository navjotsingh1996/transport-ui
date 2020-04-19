import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function GenericTextDisplay(props) {
  const { heading, readOnly, value, onChange, setter, oldObj, objKey, id } = props;

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
        label={heading}
        value={value}
        style={{width: '100%'}}
        onChange={(e) => onChange(e, setter, oldObj, objKey) }
      />
    );
  };

  return mkTextField()
}