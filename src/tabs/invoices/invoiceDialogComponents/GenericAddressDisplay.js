import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import GenericTextDisplay from './GenericTextDisplay'
import AutoComplete from '../../../components/AutoComplete'
import {searchInvoices} from "../invoicesProvider/actions";
import { searchFields } from '../constants'

export default function GenericAddressDisplay(props) {
  const { object, objSetter, onChange, id, readOnly, heading } = props;

  const dispatch = useDispatch();
  const optionsList = useSelector(state => state.invoice.invoicesSearchList) || [];
  const isLoading = useSelector(state => state.invoice.invoicesSearchInProg);

  const onOptionChange = (val) => {
    if (!val) {
      return;
    }
    const address = val.object;
    const addressKeys = Object.keys(val.object);
    const newObj = {};
    addressKeys.forEach(key => {
      newObj[key] = address[key];
    });
    objSetter(newObj)
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
          value={object.name}
          onTextChange={(e) => {
            dispatch(searchInvoices(e.target.value, object.streetAddress, searchFields.billTo));
            onChange(e, objSetter, object, 'name');
          }}
          options={createOptionsList()}
          onOptionChange={onOptionChange}
          loading={isLoading}
        />
        <AutoComplete
          id={`${id}-streetAddress`}
          heading={readOnly ? '' : 'Street Address'}
          readOnly={readOnly}
          value={object.streetAddress}
          onTextChange={(e) => {
            dispatch(searchInvoices(object.name, e.target.value, searchFields.billTo));
            onChange(e, objSetter, object, 'streetAddress');
          }}
          options={createOptionsList()}
          onOptionChange={onOptionChange}
          loading={isLoading}
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

GenericAddressDisplay.propTypes = {
  readOnly: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  object: PropTypes.any.isRequired,
  objSetter: PropTypes.func.isRequired,
  heading: PropTypes.string,
};