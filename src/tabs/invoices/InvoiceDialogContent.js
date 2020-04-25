import React from 'react';
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

export default function InvoiceDialogContent(props) {
  const { invoice, readOnly, gatherChanges } = props;
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
  }
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
    truckOrderNotUsed: !!invoice.truckOrderNotUsed
  });

  React.useEffect(() => {
    setPickupStops(getMyStops(stopTypes.pickup));
    setDeliveryStops(getMyStops(stopTypes.delivery));
  }, []);

  React.useEffect(() => {
    updateInvoice();
  }, [invoiceNumber, invoiceDate, loadNumber, billTo, pickupStops, deliveryStops, totalBal]);

  const printBillToContent = () => {
    return (
      <GenericAddressDisplay
        id={`bill-to`}
        object={billTo}
        objSetter={setBillTo}
        onChange={textOnChange}
        readOnly={readOnly}
        heading={'Bill To'}
      />
    )
  };

  const printStopContent = (stops, setter, type) => {
    return (
      <StopTypeDisplay
        id={'pickup-stops'}
        stops={stops}
        stopsSetter={setter}
        readOnly={readOnly}
        onChange={stopsTextOnChange}
        type={type}
        onDelete={deleteStop}
        onAdd={addStop}
      />
    )
  };

  const printTotalCost = () => {
    return (
      <TotalBalanceDisplay
        id={'total-balance-display'}
        readOnly={readOnly}
        obj={totalBal}
        setter={setTotalBal}
        onToggle={onTruckOrderToggle}
        onChange={onRateChange}
      />
    )
  };

  const printInvoiceNumber = () => {
    return (
      <GenericTextDisplay
        id='invoice-number'
        heading='Invoice Number'
        readOnly={readOnly}
        value={invoiceNumber}
        onChange={textOnChange}
        setter={setInvoiceNumber}
      />
    );
  };

  const printInvoiceDate = () => {
    return (
      <GenericDateDisplay
        id='invoice-date'
        heading='Invoice Date'
        readOnly={readOnly}
        value={invoiceDate}
        onChange={textOnChange}
        setter={setInvoiceDate}
        />
    )
  };

  const printLoadNumber = () => {
    return (
      <GenericTextDisplay
        id='load-number'
        heading='Load Number'
        readOnly={readOnly}
        value={loadNumber}
        onChange={textOnChange}
        setter={setLoadNumber}
      />
    );
  };

  const updateInvoice = () => {
    gatherChanges(invoiceNumber, invoiceDate, loadNumber, billTo, pickupStops.concat(deliveryStops), totalBal )
  };

  const onTruckOrderToggle = () => {
    setTotalBal({
      ...totalBal,
      truckOrderNotUsed: !totalBal.truckOrderNotUsed
    });
  };

  const onRateChange = (val, key) => {
    setTotalBal({
      ...totalBal,
      [key]: val,
    })
  };

  const deleteStop = (stop, index) => {
    stop.type === stopTypes.pickup ? pickupStops.splice(index, 1) : deliveryStops.splice(index, 1);
    stop.type === stopTypes.pickup ? setPickupStops(pickupStops.concat([])) : setDeliveryStops(deliveryStops.concat([]));
  };

  const addStop = (type) => {
    type === stopTypes.pickup ? setPickupStops(pickupStops.concat(defaultStop(type))) :
      setDeliveryStops(deliveryStops.concat(defaultStop(type)));
  };

  const textOnChange = (e, setter, oldObj, key, isDate) => {
    const val = isDate ? e : e.target.value;
    if (oldObj) {
      setter({
        ...oldObj,
        [key]: val,
      });
    }
    else {
      setter(val);
    }
  };


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