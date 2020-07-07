import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import GenericTextDisplay from './GenericTextDisplay'
import AutoComplete from '../../../components/AutoComplete'
import {searchInvoices} from "../invoicesProvider/actions";
import { searchFields } from '../constants'

export default function GenericAddressDisplay(props) {
  const { object, onChange, id, readOnly, heading } = props;

  const dispatch = useDispatch();
  const optionsList = useSelector(state => state.invoice.invoicesSearchList) || [];

  const onOptionChange = (val) => {
    const address = val.object;
    const addressKeys = Object.keys(val.object);

    addressKeys.forEach(key => {
      const e = { target: {} };
      e.target.value = address[key];
      onChange(e, key)
    })
  };

  const createOptionsList = () => {
    return optionsList.map(option => {
      return {
        text: `${option.name} ${option.streetAddress} ${option.city}, ${option.state} ${option.zip}`,
        object: option
      }
    })
  };

  const mkTextField = () => {
    return (
      <div id={id}>
        {heading ? <h3>{heading}:</h3> : ''}
        <AutoComplete
          id={`${id}-name`}
          heading={readOnly ? '' : 'Name'}
          readOnly={readOnly}
          value={object.streetAddress}
          onTextChange={(e) => {
            dispatch(searchInvoices(e.target.value, object.streetAddress, searchFields.billTo));
            onChange(e, object, 'name');
          }}
          options={createOptionsList()}
          onOptionChange={onOptionChange}
        />
        <AutoComplete
          id={`${id}-streetAddress`}
          heading={readOnly ? '' : 'Street Address'}
          readOnly={readOnly}
          value={object.streetAddress}
          onTextChange={(e) => {
            dispatch(searchInvoices(object.name, e.target.value, searchFields.billTo));
            onChange(e, object, 'streetAddress');
          }}
          options={createOptionsList()}
          onOptionChange={onOptionChange}
        />
        <GenericTextDisplay
          id={`${id}-city`}
          heading={readOnly ? '' : 'City'}
          readOnly={readOnly}
          value={object.city}
          onChange={(e) => onChange(e, 'city')}
        />
        <GenericTextDisplay
          id={`${id}-state`}
          heading={readOnly ? '' : 'State'}
          readOnly={readOnly}
          value={object.state}
          onChange={(e) => onChange(e, 'state')}
        />
        <GenericTextDisplay
          id={`${id}-zip`}
          heading={readOnly ? '' : 'Zip code'}
          readOnly={readOnly}
          value={object.zip}
          onChange={(e) => onChange(e, 'zip')}
        />
      </div>
    );
  };

  return mkTextField();
}

GenericAddressDisplay.propTypes = {
  readOnly: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  object: PropTypes.any.isRequired,
  heading: PropTypes.string,
};