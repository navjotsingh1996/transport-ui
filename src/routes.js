import React from 'react'
import InvoicesTab from './tabs/invoices';
import HomeTab from './tabs/home';

const routes = [
  {
    path: '/home',
    text: 'Home',
    component: HomeTab
  },
  {
    path: '/invoices',
    text: 'Invoices',
    component: InvoicesTab
  },
];

export default routes;