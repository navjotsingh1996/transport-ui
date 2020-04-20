import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import * as ACTIONS from './constants';

export function* getInvoicesHandler() {
  console.log("Getting invoices")
}

export function* createInvoicesHandler(action){
  console.log(action)
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