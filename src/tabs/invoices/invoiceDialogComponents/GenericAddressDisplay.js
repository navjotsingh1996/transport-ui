import React from 'react';
import GenericTextDisplay from './GenericTextDisplay'

export default function GenericAddressDisplay(props) {
  const { object, objSetter, onChange, id, readOnly, heading } = props;
  const mkTextField = () => {
    return (
      <div id={id}>
        {heading ? <h3>{heading}:</h3> : ''}
        <GenericTextDisplay
          id={`${id}-name`}
          heading={readOnly ? '' : 'Name'}
          readOnly={readOnly}
          value={object.name}
          onChange={onChange}
          setter={objSetter}
          oldObj={object}
          objKey='name'
        />
        <GenericTextDisplay
          id={`${id}-streetAddress`}
          heading={readOnly ? '' : 'Street Address'}
          readOnly={readOnly}
          value={object.streetAddress}
          onChange={onChange}
          setter={objSetter}
          oldObj={object}
          objKey='streetAddress'
        />
        <GenericTextDisplay
          id={`${id}-city`}
          heading={readOnly ? '' : 'City'}
          readOnly={readOnly}
          value={object.city}
          onChange={onChange}
          setter={objSetter}
          oldObj={object}
          objKey='city'
        />
        <GenericTextDisplay
          id={`${id}-state`}
          heading={readOnly ? '' : 'State'}
          readOnly={readOnly}
          value={object.state}
          onChange={onChange}
          setter={objSetter}
          oldObj={object}
          objKey='state'
        />
        <GenericTextDisplay
          id={`${id}-zip`}
          heading={readOnly ? '' : 'Zip code'}
          readOnly={readOnly}
          value={object.zip}
          onChange={onChange}
          setter={objSetter}
          oldObj={object}
          objKey='zip'
        />
      </div>
    );
  };

  return mkTextField();
}