import React from 'react';
import { stopTypes } from './constants';

export const columns = [
  {
    label: 'Invoice #',
    accessor: 'invoiceNumber',
    options: {
      hint: "Invoice Number",
      filterType: 'textField'
    }
  },
  {
    label: 'Load #',
    accessor: 'loadNumber',
    options: {
      hint: "Load Number",
      filterType: 'textField'
    }
  },
  {
    label: 'Brokerage',
    accessor: 'billTo',
    customBody: value => value.name,
    toolTip: "Brokerage company name",
  },
  {
    label: 'Pickup Date',
    accessor: 'stops',
    toolTip: "Pickup Date",
    filterType: 'textField',
    customBody: value => multiStop(value, 'date', stopTypes.pickup)
},
  {
    label: "Pickup",
    accessor: 'stops',
    toolTip: "Pickup location",
    customBody: value => multiStop(value, 'name', stopTypes.pickup)
},
  {
    label: 'Delivery Date',
    accessor: 'stops',
    toolTip: "Delivery Date",
    filterType: 'textField',
    customBody: value => multiStop(value, 'date', stopTypes.delivery)
  },
  {
    label: 'Delivery',
    accessor: 'stops',
    toolTip: "Delivery location",
    customBody: value => multiStop(value, 'name', stopTypes.delivery)
  }
];

export const options = {
  uniqueDataKeyAccessor: 'invoiceNumber'
};

const multiStop = (value, key, type) => {
  const myStops = [];
  const buildCell = [];
  value.forEach((v) => {
    if (v.type === type) {
      myStops.push(v);
    }
  });
  myStops.forEach((v, index) => {
    const elem = (<p key={v[key]}>{v[key]}{index === value.length ? null : <br />}</p>);
    buildCell.push(elem);
  });
  return buildCell;
};
