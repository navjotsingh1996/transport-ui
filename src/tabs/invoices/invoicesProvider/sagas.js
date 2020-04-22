import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import { REST_PREFIX } from '../../../main/constants';
import axios from 'axios';

import * as ACTIONS from './constants';

export function* getInvoicesHandler() {
  axios.get('/invoice').then((res) => {
    console.log(res);
  }, (err) => {
    console.log(err);
  })
}

// FIXME: Need to batch these request so we don't lose error messages
export function* createInvoicesHandler(action){
  const invoices = action.invoices;
  invoices.forEach((inv) =>
  {
    axios.post('/invoice', inv).then((res) => {
      console.log(res)
    }, (err) => {
      console.log(err)
    })
  });
}

export function* editInvoicesHandler(action){
  console.log(action)
}

export function* deleteInvoicesHandler(action){
  console.log(action)
}

export default function* getInvoicesWatcher() {
  yield all([
    takeEvery(ACTIONS.GET_INVOICES, getInvoicesHandler),
    takeLatest(ACTIONS.EDIT_INVOICES, editInvoicesHandler),
    takeLatest(ACTIONS.CREATE_INVOICES, createInvoicesHandler),
    takeLatest(ACTIONS.DELETE_INVOICES, deleteInvoicesHandler),
  ])
}