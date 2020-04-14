import React from 'react';
import DataTable from '../../components/DataGrid';
import { columns, options } from './dataGridConfig'
import fakeData from './fakeData';

export default function InvoicesTab() {

  const onCreate = (data) => {
    console.log(data);
  };

  const onEdit = (data) => {
    console.log(data);
  };

  const onGenerate = (data) => {
    console.log(data);
  };

  const onDelete = (data) => {
    console.log(data);
  };

  const onDownload = (data) => {
    console.log(data);
  };

  return (
    <DataTable
      title='Invoices'
      columns={columns}
      options={options}
      data={fakeData}
      onCreate={onCreate}
      onEdit={onEdit}
      onDelete={onDelete}
      onGenerate={onGenerate}
      onDownload={onDownload}
    />
  )
}