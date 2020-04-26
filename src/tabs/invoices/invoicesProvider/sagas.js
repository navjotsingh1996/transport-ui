import { all, put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import axiosAgent from '../../../utils/axiosAgent';
import {
  getInvoices,
  getInvoicesOk,
  getInvoicesFail,
  createInvoicesOk,
  createInvoicesFail,
  editInvoicesOk,
  editInvoicesFail,
  deleteInvoicesOk,
  deleteInvoicesFail
} from './actions';

import * as ACTIONS from './constants';

const baseURI = '/invoice';

export function* getInvoicesHandler() {

  try {
    const res = yield call(axiosAgent.get, baseURI);
    yield put(getInvoicesOk(res.data));
  } catch(err) {
    yield put(getInvoicesFail(err))
  }
}

// FIXME: Need to batch these request so we don't lose error messages
export function* createInvoicesHandler(action){
  try {
    const res = yield call(axiosAgent.post, baseURI, action.invoice, { responseType: 'blob' });
    yield put(createInvoicesOk(res.data));
    yield put(getInvoices());
  } catch (err) {
    yield put(createInvoicesFail(err));
  }
}

export function* editInvoicesHandler(action){
  try {
    const res = yield call(axiosAgent.put, baseURI, action.invoice, {responseType: 'blob'});
    yield put(editInvoicesOk(res.data));
    yield put(getInvoices());
  } catch (err) {
    yield put(editInvoicesFail(err));
  }
}

export function* deleteInvoicesHandler(action){
  const deleteURI = '/delete';
  try {
    yield call(axiosAgent.put, baseURI + deleteURI, action.invoices);
    yield put(deleteInvoicesOk());
    yield put(getInvoices());
  } catch (err) {
    yield put(deleteInvoicesFail(err));
  }
}

export default function* getInvoicesWatcher() {
  yield all([
    takeEvery(ACTIONS.GET_INVOICES, getInvoicesHandler),
    takeLatest(ACTIONS.EDIT_INVOICES, editInvoicesHandler),
    takeLatest(ACTIONS.CREATE_INVOICES, createInvoicesHandler),
    takeLatest(ACTIONS.DELETE_INVOICES, deleteInvoicesHandler),
  ])
}