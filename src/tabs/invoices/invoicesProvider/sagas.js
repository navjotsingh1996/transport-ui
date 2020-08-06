import { all, put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import axiosAgent from '../../../utils/axiosAgent';
import { getFileName } from '../../../utils/utils'
import {
  getInvoices,
  getInvoicesOk,
  getInvoicesFail,
  createInvoicesOk,
  createInvoicesFail,
  editInvoicesOk,
  editInvoicesFail,
  deleteInvoicesOk,
  deleteInvoicesFail,
  searchInvoicesOk,
  searchInvoicesFail
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

export function* createInvoicesHandler(action){
  try {
    const res = yield call(axiosAgent.post, baseURI, action.invoice, { responseType: 'blob' });
    yield put(createInvoicesOk({
      content: res.data,
      filename: getFileName(res.headers['content-disposition'])
    }));
    yield put(getInvoices());
  } catch (err) {
    yield put(createInvoicesFail(err));
  }
}

export function* editInvoicesHandler(action){
  try {
    const res = yield call(axiosAgent.put, baseURI, action.invoice, {responseType: 'blob'});
    yield put(editInvoicesOk({
      content: res.data,
      filename: getFileName(res.headers['content-disposition'])
    }));
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

export function* searchInvoicesHandler(action){
  const deleteURI = `/search?field=${action.field}&name=${action.name}&address=${action.address}`;
  try {
    const res = yield call(axiosAgent.get, baseURI + deleteURI);
    yield put(searchInvoicesOk(res.data));
  } catch (err) {
    yield put(searchInvoicesFail(err));
  }
}

export default function* getInvoicesWatcher() {
  yield all([
    takeEvery(ACTIONS.GET_INVOICES, getInvoicesHandler),
    takeLatest(ACTIONS.EDIT_INVOICES, editInvoicesHandler),
    takeLatest(ACTIONS.CREATE_INVOICES, createInvoicesHandler),
    takeLatest(ACTIONS.DELETE_INVOICES, deleteInvoicesHandler),
    takeLatest(ACTIONS.SEARCH_INVOICES, searchInvoicesHandler),
  ])
}