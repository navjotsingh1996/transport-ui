import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GenericTextDisplay from './invoiceDialogComponents/GenericTextDisplay';
import GenericDateDisplay from './invoiceDialogComponents/GenericDateDisplay';
import GenericAddressDisplay from './invoiceDialogComponents/GenericAddressDisplay'
import {stopTypes} from "./constants";
import StopTypeDisplay from "./invoiceDialogComponents/StopTypeDisplay";
import TotalBalanceDisplay from "./invoiceDialogComponents/TotalBalanceDisplay";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%'
  },
  totalBalPaper: {
    padding: theme.spacing(1),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    height: '100%'
  },
  addressPapers: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: '100%'
  },
}));

/**
 * Holds the content of the edit/create/view invoices dialog
 */
function InvoiceDialogContent(props) {
  const { invoice, readOnly, gatherChanges } = props;
  /**
   * Helper function that returns an empty stop
   * @param type pickup or delivery
   * @returns stop with empty values
   */
  const defaultStop = (type) => {
    return {
      date: new Date().getTime(),
      name: '',
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
      type: type
    }
  };

  /**
   * Setting up the state of all the different parts of the dialog
   */
  const classes = useStyles();
  const [invoiceNumber, setInvoiceNumber] = React.useState(invoice.id || '');
  const [invoiceDate, setInvoiceDate] = React.useState(invoice.date || new Date().getTime());
  const [loadNumber, setLoadNumber] = React.useState(invoice.loadNumber || '');
  const [billTo, setBillTo] = React.useState({
    name: invoice.billTo ? invoice.billTo.name : '',
    streetAddress: invoice.billTo ? invoice.billTo.streetAddress : '',
    city: invoice.billTo ? invoice.billTo.city : '',
    state: invoice.billTo ? invoice.billTo.state : '',
    zip: invoice.billTo ? invoice.billTo.zip : ''
  });
  const [pickupStops, setPickupStops] = React.useState([]);
  const [deliveryStops, setDeliveryStops] = React.useState([]);
  const [totalBal, setTotalBal] = React.useState({
    rateAmount: invoice.balances ? invoice.balances.rateAmount || 0.0 : 0.0,
    detention: invoice.balances ? invoice.balances.detention || 0.0 : 0.0,
    layover: invoice.balances ? invoice.balances.layover || 0.0 : 0.0,
    advance: invoice.balances ? invoice.balances.advance || 0.0 : 0.0,
    extraStop: invoice.balances ? invoice.balances.extraStop || 0.0 : 0.0,
    lumper: invoice.balances ? invoice.balances.lumper || 0.0 : 0.0,
    others: invoice.balances ? invoice.balances.others || 0.0 : 0.0,
    truckOrderNotUsed: invoice.balances ? !!invoice.balances.truckOrderNotUsed : false
  });

  /**
   * initializes stops
   */
  React.useEffect(() => {

    /**
     * helper function to only return the type of stop your looking for
     * @param type pickup or deliver
     * @returns array of the type of stop
     */
    const getMyStops = (type) => {
      const myStops = [];
      if (!invoice.stops) {
        return [defaultStop(type)];
      }
      invoice.stops.forEach((stop) => {
        if(stop.type === type) {
          myStops.push(stop);
        }
      });
      return myStops;
    };

    setPickupStops(getMyStops(stopTypes.pickup));
    setDeliveryStops(getMyStops(stopTypes.delivery));
  }, [invoice.stops]);

  /**
   * Updates the parent invoice object
   */
  React.useEffect(() => {
    /**
     * helper function that updates the invoice
     */
    gatherChanges(invoiceNumber, invoiceDate, loadNumber, billTo, pickupStops.concat(deliveryStops), totalBal )
  }, [invoiceNumber, invoiceDate, loadNumber, billTo, pickupStops, deliveryStops, totalBal]);

  /**
   * Helper function that renders the bill to section
   */
  const printBillToContent = () => {
    return (
      <GenericAddressDisplay
        id={`bill-to`}
        object={billTo}
        onChange={(e, key) => billToTextOnChange(e, key)}
        readOnly={readOnly}
        heading={'Bill To'}
      />
    )
  };

  /**
   * Helper function that renders stops
   * @param stops list of stops
   * @param setter setter for that specific object
   * @param type pickup or delivery
   */
  const printStopContent = (stops, setter, type) => {
    return (
      <StopTypeDisplay
        id={'pickup-stops'}
        stops={stops}
        readOnly={readOnly}
        onChange={(e, key, i, isDate) => stopsTextOnChange(e, setter, stops, key, i, isDate)}
        type={type}
        onDelete={deleteStop}
        onAdd={addStop}
      />
    )
  };

  /**
   * Helper function to show total balances
   */
  const printTotalCost = () => {
    return (
      <TotalBalanceDisplay
        id={'total-balance-display'}
        readOnly={readOnly}
        obj={totalBal}
        onToggle={onTruckOrderToggle}
        onChange={(val, key) => onRateChange(val, key)}
      />
    )
  };

  /**
   * Helper function to show invoice number
   */
  const printInvoiceNumber = () => {
    return (
      <GenericTextDisplay
        id='invoice-number'
        heading='Invoice Number'
        readOnly={readOnly}
        value={invoiceNumber}
        onChange={(e) => textOnChange(e, setInvoiceNumber)}
        setter={setInvoiceNumber}
      />
    );
  };

  /**
   * Helper function to show invoice date
   */
  const printInvoiceDate = () => {
    return (
      <GenericDateDisplay
        id='invoice-date'
        heading='Invoice Date'
        readOnly={readOnly}
        value={invoiceDate}
        onChange={(e) => textOnChange(e, setInvoiceDate, true)}
        setter={setInvoiceDate}
        />
    )
  };

  /**
   * Helper function to show load number
   */
  const printLoadNumber = () => {
    return (
      <GenericTextDisplay
        id='load-number'
        heading='Load Number'
        readOnly={readOnly}
        value={loadNumber}
        onChange={(e) => textOnChange(e, setLoadNumber)}
        setter={setLoadNumber}
      />
    );
  };

  /**
   * sets truck order not used toggle
   */
  const onTruckOrderToggle = () => {
    setTotalBal({
      ...totalBal,
      truckOrderNotUsed: !totalBal.truckOrderNotUsed
    });
  };

  /**
   * setts new value in the total balance setter
   * @param val new value
   * @param key what element it is
   */
  const onRateChange = (val, key) => {
    setTotalBal({
      ...totalBal,
      [key]: val,
    })
  };

  /**
   * Deletes a stop
   * @param stop what stop it is
   * @param index index of stop
   */
  const deleteStop = (stop, index) => {
    stop.type === stopTypes.pickup ? pickupStops.splice(index, 1) : deliveryStops.splice(index, 1);
    stop.type === stopTypes.pickup ? setPickupStops(pickupStops.concat([])) : setDeliveryStops(deliveryStops.concat([]));
  };

  /**
   * Adding a stop
   * @param type type of stop
   */
  const addStop = (type) => {
    type === stopTypes.pickup ? setPickupStops(pickupStops.concat(defaultStop(type))) :
      setDeliveryStops(deliveryStops.concat(defaultStop(type)));
  };
  console.log(billTo);

  /**
   * Bill to text on change for all bill to fields
   * @param e event
   * @param key object key
   */
  const billToTextOnChange = (e, key) => {
    const billToNew = billTo;
    billToNew[key] = e.target.value;
    setBillTo({...billToNew})
  };

  /**
   * generic text change function, handles most of the textfields
   * @param e event
   * @param setter setter function
   * @param isDate if this is a date field
   */
  const textOnChange = (e, setter, isDate) => {
    setter(isDate ? e : e.target.value);
  };

  /**
   * Generic stops on change function
   * @param e event
   * @param setter setter function
   * @param oldObj old object with all the data
   * @param key key of element
   * @param index array position of the stop
   * @param isDate if this is a date field
   */
  const stopsTextOnChange = (e, setter, oldObj, key, index, isDate) => {
    const obj = oldObj;
    obj[index][key] = isDate ? e : e.target.value;
    setter([].concat(obj));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={3}>
            {printInvoiceNumber()}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={3}>
            {printInvoiceDate()}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={3}>
            {printLoadNumber()}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.addressPapers} elevation={3}>
            {printBillToContent()}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.addressPapers} elevation={3}>
            {printStopContent(pickupStops, setPickupStops, stopTypes.pickup)}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.addressPapers} elevation={3}>
            {printStopContent(deliveryStops, setDeliveryStops, stopTypes.delivery)}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.totalBalPaper} elevation={3}>
            {printTotalCost()}
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

function areEqual(prev, next) {
  console.log("PREVIOUS STATE: ", prev);
  console.log("NEXT STATE: ", next);
  return false
}

InvoiceDialogContent.propTypes = {
  readOnly: PropTypes.bool.isRequired,
  invoice: PropTypes.any.isRequired,
  gatherChanges: PropTypes.func.isRequired,
};

export default React.memo(InvoiceDialogContent, areEqual);
