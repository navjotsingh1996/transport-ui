import * as invoiceActions from './constants';

const initialState = {
  getInvoicesInProg: false,
  getInvoicesErr: null,
  invoices: [],
  invoicesCreateInProg: false,
  invoicesCreateErr: false,
  invoiceFile: null,
  invoiceFilename: null,
  invoicesEditInProg: false,
  invoicesEditErr: false,
  invoicesDeleteInProg: false,
  invoicesDeleteErr: false,
  invoicesSearchInProg: false,
  invoicesSearchErr: null,
  invoicesSearchList: []
};

function invoicesReducer(state = initialState, action) {
  switch(action.type) {
    case invoiceActions.GET_INVOICES:
      return {
        ...state,
        getInvoicesInProg: true
      };
    case invoiceActions.GET_INVOICES_OK:
      return {
        ...state,
        getInvoicesInProg: false,
        getInvoicesErr: null,
        invoices: action.data
      };
    case invoiceActions.GET_INVOICES_FAIL:
      return {
        ...state,
        getInvoicesInProg: false,
        getInvoicesErr: action.err,
      };
    case invoiceActions.CREATE_INVOICES:
      return {
        ...state,
        invoicesCreateInProg: true
      };
    case invoiceActions.EDIT_INVOICES:
      return {
        ...state,
        invoicesEditInProg: true
      };
    case invoiceActions.DELETE_INVOICES:
      return {
        ...state,
        invoicesDeleteInProg: true
      };
    case invoiceActions.CREATE_INVOICES_OK:
      return {
        ...state,
        invoiceFile: action.res.content,
        invoiceFilename: action.res.filename,
        invoicesCreateInProg: false,
        invoicesCreateErr: null
      };
    case invoiceActions.EDIT_INVOICES_OK:
      return {
        ...state,
        invoiceFile: action.res.content,
        invoiceFilename: action.res.filename,
        invoicesEditInProg: false,
        invoicesEditErr: null
      };
    case invoiceActions.DELETE_INVOICES_OK:
      return {
        ...state,
        invoicesDeleteInProg: false,
        invoicesDeleteErr: null
      };
    case invoiceActions.CREATE_INVOICES_FAIL:
      return {
        ...state,
        invoicesCreateInProg: false,
        invoicesCreateErr: action.err,
      };
    case invoiceActions.EDIT_INVOICES_FAIL:
      return {
        ...state,
        invoicesEditInProg: false,
        invoicesEditErr: action.err,
      };
    case invoiceActions.DELETE_INVOICES_FAIL:
      return {
        ...state,
        invoicesDeleteInProg: false,
        invoicesDeleteErr: action.err,
      };
    case invoiceActions.SEARCH_INVOICES:
      return {
        ...state,
        invoicesSearchInProg: true
      };
    case invoiceActions.SEARCH_INVOICES_OK:
      return {
        ...state,
        invoicesSearchInProg: false,
        invoicesSearchErr: null,
        invoicesSearchList: action.data
      };
    case invoiceActions.SEARCH_INVOICES_FAIL:
      return {
        ...state,
        invoicesSearchInProg: false,
        invoicesSearchErr: action.err,
      };
    default:
      return state;
  }
}

export default invoicesReducer;