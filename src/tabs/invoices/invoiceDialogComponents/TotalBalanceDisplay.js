import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import GenericRateDisplay from "./GenericRateDisplay";

export default function TotalBalanceDisplay(props) {
  const { readOnly, obj, setter, onToggle, onChange } = props;

  const truckOrderNotUsed = () => {
    return (
      <div>
        <h3>Total Cost:</h3>
        {readOnly ? (
          <div>
            <u>Rate Amount $ {obj.rateAmount}</u>
            <h3>Total Balance $ {obj.rateAmount.toFixed(2)}</h3>
          </div>
        ) : (
          <div>
            <FormControl component="fieldset">
              <FormControlLabel
                value="start"
                control={<Switch color="primary" />}
                label="Truck Order Not Used"
                labelPlacement="start"
                checked={obj.truckOrderNotUsed}
                onChange={onToggle}
              />
            </FormControl>
              <GenericRateDisplay
                id='rate-amount'
                heading='Rate Amount'
                readOnly={readOnly}
                value={obj.rateAmount}
                onChange={onChange}
                setter={setter}
                oldObj={obj}
                objKey={'rateAmount'}
              />
            <h3>Total Balance $ {obj.rateAmount}</h3>
          </div>
        )}
      </div>
    );
  };

  /**
   * Helper function to create a rate react element
   * @param heading header title text
   * @param value value of the object
   * @param key for the rate react element
   * @returns a rate react element
   */
  const printGenericTextObj = (id, heading, value, key) => {
    return (
      <GenericRateDisplay
        id={id}
        heading={heading}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
        setter={setter}
        oldObj={obj}
        objKey={key}
      />
    )
  };

  /**
   * Constructs the total balances of the invoice
   * @returns {*}
   */
  const totalBalanceDisplay = () => {
    const totalBal = parseFloat(obj.rateAmount) + parseFloat(obj.detention) + parseFloat(obj.layover) +
      parseFloat(obj.advance) + parseFloat(obj.extraStop) + parseFloat(obj.lumper) + parseFloat(obj.others);

    return (
      <div>
        <h3>Total Cost:</h3>
        {readOnly ? '' : (
          <FormControl component="fieldset">
            <FormControlLabel
              value="start"
              control={<Switch color="primary" />}
              label="Truck Order Not Used"
              labelPlacement="start"
              checked={obj.truckOrderNotUsed}
              onChange={onToggle}
            />
          </FormControl>
        )}
        {printGenericTextObj('rate-amount','Rate Amount', obj.rateAmount, 'rateAmount')}
        {printGenericTextObj('detention','Detention', obj.detention, 'detention')}
        {printGenericTextObj('layover','Layover', obj.layover, 'layover')}
        {printGenericTextObj('advance','Advance', obj.advance, 'advance')}
        {printGenericTextObj('extraStop','Extra Stop', obj.extraStop, 'extraStop')}
        {printGenericTextObj('lumper','Lumper', obj.lumper, 'lumper')}
        {printGenericTextObj('others','Others', obj.others, 'others')}
        <h3>Total Balance $ {totalBal.toFixed(2)}</h3>
      </div>
    );
  };
  return obj.truckOrderNotUsed ? truckOrderNotUsed() : totalBalanceDisplay();
}

TotalBalanceDisplay.propTypes = {
  readOnly: PropTypes.bool.isRequired,
  obj: PropTypes.any.isRequired,
  setter: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};