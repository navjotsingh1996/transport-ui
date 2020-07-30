import React from 'react';
import { stopTypes } from './constants';

/**
 * Column configuration for the invoices data-grid
 */
export const columns = [
  {
    label: 'Invoice #',
    accessor: 'id',
    sort: true,
    filter: true
  },
  {
    label: 'Invoice Date',
    accessor: 'date',
    customBody: value => formatDate(value),
    sort: true,
    filter: false
  },
  {
    label: 'Load #',
    accessor: 'loadNumber',
    sort: true,
    filter: true
  },
  {
    label: 'Brokerage',
    accessor: 'billTo',
    customBody: value => value.name,
    toolTip: "Brokerage company name",
    sort: true,
    sortFunction: (a, b, accessor) => billToSort(a, b, accessor),
    filter: false
  },
  {
    label: 'Pickup Date',
    accessor: 'stops',
    toolTip: "Pickup Date",
    key: 'pickupDate',
    sort: false,
    customBody: value => multiStop(value, 'date', stopTypes.pickup)
  },
  {
    label: "Pickup",
    accessor: 'stops',
    toolTip: "Pickup location",
    key: 'pickup',
    sort: false,
    customBody: value => multiStop(value, 'name', stopTypes.pickup)
},
  {
    label: 'Delivery Date',
    accessor: 'stops',
    toolTip: "Delivery Date",
    key: 'deliveryDate',
    sort: false,
    customBody: value => multiStop(value, 'date', stopTypes.delivery)
  },
  {
    label: 'Delivery',
    accessor: 'stops',
    toolTip: "Delivery location",
    key: 'delivery',
    sort: false,
    customBody: value => multiStop(value, 'name', stopTypes.delivery)
  },
  {
    label: 'Total Rate',
    accessor: 'balances',
    toolTip: 'Total cost of invoice',
    key: 'balances',
    sort: true,
    customBody: value => formatBalance(value),
    sortFunction: (a, b, accessor) => balanceSort(a, b, accessor),
    filter: false
  }
];

/**
 * Invoices data-gid options
 */
export const options = {
  uniqueDataKeyAccessor: 'id'
};

/**
 * Aggregates all balances items to get a total balance
 * @param bal balance object
 * @returns {string} total balance as a string with fixed decimal place of 2
 */
const getTotalBalance = (bal) => {
  const { rateAmount, advance, detention, extraStop, layover, other, truckOrderNotUsed } = bal;
  return truckOrderNotUsed ? rateAmount.toFixed(2) : (rateAmount + advance + detention + extraStop + layover + other).toFixed(2);
};

/**
 * Custom bill to sorting, sorts based on the name of the brokerage
 * @param a first element
 * @param b second element
 * @param accessor how to access the bill to from the row object
 * @returns {number} returns -1, 1, 0 depending on the comparison between a and b
 */
const billToSort = (a, b, accessor) => {
  return b[accessor].name.localeCompare(a[accessor].name);
};

/**
 * Custom sort for balance
 * @param a first element
 * @param b second element
 * @param accessor accessor how to access the bill to from the row object
 * @returns {number} returns -1, 1, 0 depending on the comparison between a and b
 */
const balanceSort = (a, b, accessor) => {
  const aTotal = getTotalBalance(a[accessor]);
  const bTotal = getTotalBalance(b[accessor]);
  return bTotal - aTotal;
};

/**
 * Formats the balance object depending on if the truck order was not used
 * @param val value of the balance object
 * @returns {string} Total Balance
 */
const formatBalance = (val) => {
  const { rateAmount, truckOrderNotUsed } = val;
  return truckOrderNotUsed ? (
    <h4>TRUCK ORDER NOT USED: $ {rateAmount.toFixed(2)}</h4>
  ) : getTotalBalance(val);
};

/**
 * Formatter for all date columns
 * @param date date to be formatted
 * @returns {string} returns a human readable date
 */
const formatDate = (date) => {
  const d = new Date(date * 1000);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [month, day, year].join('/');
};

/**
 * Sorts a list of stops based on there dates
 * @param stops stops to be sorted
 * @returns stops sorted in descending order
 */
const sortStops = (stops) => {
  return stops.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  });
};

/**
 * Handles multi stops for any stop column
 * @param value stops
 * @param key date or location
 * @param type pickup or delivery
 * @returns {Array} list of stops sorted
 */
const multiStop = (value, key, type) => {
  const sortedStops = sortStops(value);
  const myStops = [];
  const buildCell = [];
  sortedStops.forEach((v) => {
    if (v.type === type) {
      myStops.push(v);
    }
  });
  myStops.forEach((v, index) => {
    let text = v[key];
    if (key === 'date') {
      text = formatDate(text);
    }
    const elem = (<p key={`${text}-${index}`}>{text}{index === value.length ? null : <br />}</p>);
    buildCell.push(elem);
  });
  return buildCell;
};
