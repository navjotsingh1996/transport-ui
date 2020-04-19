import React from 'react';
import GenericDateDisplay from './GenericDateDisplay';
import GenericAddressDisplay from './GenericAddressDisplay';
import {stopTypes} from "../constants";

export default function StopTypeDisplay(props) {
  const { stops, stopsSetter, id, readOnly, onChange, type, rowId } = props;
  return (
    <div id={id}>
      {stops.map((stop, i) => {
        return (
          <div id={`${id}-${i}`} key={`${id}-${i}`}>
            <GenericDateDisplay
              id={`${id}-date-${type}-${rowId}-${i}`}
              heading={`${type === stopTypes.pickup ? 'Pickup Date' : 'Delivery Date'} ${i + 1}`}
              readOnly={readOnly}
              value={stop.date}
              onChange={(e, setter, oldObj, key) => onChange(e, setter, stops, key, i, true)}
              setter={stopsSetter}
              oldObj={stop}
              objKey='date'
            />
            <GenericAddressDisplay
              id={`${id}-address-${type}-${rowId}-${i}`}
              heading={''}
              readOnly={readOnly}
              object={stop}
              onChange={(e, setter, oldObj, key) => onChange(e, setter, stops, key, i)}
              objSetter={stopsSetter}
            /><br />
          </div>
        )
      })}
    </div>
  )
}