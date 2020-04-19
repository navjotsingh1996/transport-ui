import React from 'react';
import { stopTypes } from './constants';

export const columns = [
  {
    label: 'Invoice #',
    accessor: 'invoiceNumber',
    sort: true
  },
  {
    label: 'Invoice Date',
    accessor: 'invoiceDate',
    sort: true
  },
  {
    label: 'Load #',
    accessor: 'loadNumber',
    sort: true
  },
  {
    label: 'Brokerage',
    accessor: 'billTo',
    customBody: value => value.name,
    toolTip: "Brokerage company name",
    sort: true,
    sortFunction: (a, b, accessor) => billToSort(a, b, accessor)
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
  }
];

export const options = {
  uniqueDataKeyAccessor: 'invoiceNumber'
};

const billToSort = (a, b, accessor) => {
  return b[accessor].name.localeCompare(a[accessor].name);
};

const formatDate = (date) => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [month, day, year].join('/');
};

const sortStops = (stops) => {
  return stops.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  });
};

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
      const date = new Date(0);
      date.setUTCMilliseconds(text);
      text = formatDate(date);
    }
    const elem = (<p key={`${text}-${index}`}>{text}{index === value.length ? null : <br />}</p>);
    buildCell.push(elem);
  });
  return buildCell;
};
