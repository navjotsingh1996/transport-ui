import React from 'react';
import DataTable from '../../components/DataGrid';
import { columns, options } from './dataGridConfig'
import fakeData from './fakeData';

export default function InvoicesTab() {
  return (
    <DataTable
      title='Invoices'
      columns={columns}
      options={options}
      data={fakeData}
    />
  )
}