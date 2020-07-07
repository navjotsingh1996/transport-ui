import React from 'react'
import AutoComplete from '../../components/AutoComplete'
import {searchInvoices} from "../invoices/invoicesProvider/actions";
import { searchFields } from '../invoices/constants'
import { useSelector, useDispatch } from 'react-redux';

/**
 * Top level home page
 */
export default function HomeTab() {
  const [fields, setFields] = React.useState({
    first: '',
    second: ''
  });
  const dispatch = useDispatch();
  const optionsList = useSelector(state => state.invoice.invoicesSearchList) || [];

  const onChange = (e, key) => {
    if (key === 'first') {
      dispatch(searchInvoices(e.target.value, fields.second, searchFields.billTo));
    } else {
      dispatch(searchInvoices(fields.first, e.target.value, searchFields.billTo));
    }
    setFields({
      ...fields,
      [key]: e.target.value
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

  return (
    <div>
      Home Tab, not sure what to put here now but this should be the landing page with some type of info?
      <AutoComplete
        options={createOptionsList()}
        onTextChange={(e) => onChange(e, 'first')}
        onOptionChange={() => {}}
        title={'test'}
        id={'test'}
        value={fields.first}
      />
      <AutoComplete
        options={createOptionsList()}
        onTextChange={(e) => onChange(e, 'second')}
        onOptionChange={() => {}}
        title={'test2'}
        id={'test2'}
        value={fields.second}
      />
    </div>
  )
}