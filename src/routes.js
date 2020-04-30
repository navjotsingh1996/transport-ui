import React from 'react'
import InvoicesTab from './tabs/invoices';
import HomeTab from './tabs/home';
import HomeIcon from '@material-ui/icons/Home';
import InvoiceIcon from '@material-ui/icons/Description';

/**
 * Contains the url routes for the whole application
 */
const routes = [
  {
    path: '/home',
    text: 'Home',
    component: HomeTab,
    icon: <HomeIcon />
  },
  {
    path: '/invoices',
    text: 'Invoices',
    component: InvoicesTab,
    icon: <InvoiceIcon />
  },
];

export default routes;