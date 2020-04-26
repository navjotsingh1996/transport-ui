import * as invoiceActions from './constants';

const initialState = {
  getInvoicesInProg: false,
  getInvoicesErr: null,
  invoices: [],
  invoicesCreateInProg: false,
  invoicesCreateErr: false,
  invoiceFile: null,
  invoicesEditInProg: false,
  invoicesEditErr: false,
  invoicesDeleteInProg: false,
  invoicesDeleteErr: false
};

function invoicesReducer(state = initialState, action) {
  switch(action.type) {
    case invoiceActions.GET_INVOICES:
      return {
        ...initialState,
        getInvoicesInProg: true
      };
    case invoiceActions.GET_INVOICES_OK:
      return {
        ...initialState,
        getInvoicesInProg: false,
        getInvoicesErr: null,
        invoices: action.data
      };
    case invoiceActions.GET_INVOICES_FAIL:
      return {
        ...initialState,
        getInvoicesInProg: false,
        getInvoicesErr: action.err,
      };
    case invoiceActions.CREATE_INVOICES:
      return {
        ...initialState,
        invoicesCreateInProg: true
      };
    case invoiceActions.EDIT_INVOICES:
      return {
        ...initialState,
        invoicesEditInProg: true
      };
    case invoiceActions.DELETE_INVOICES:
      return {
        ...initialState,
        invoicesDeleteInProg: true
      };
    case invoiceActions.CREATE_INVOICES_OK:
      return {
        ...initialState,
        invoiceFile: action.res,
        invoicesCreateInProg: false,
        invoicesCreateErr: null
      };
    case invoiceActions.EDIT_INVOICES_OK:
      return {
        ...initialState,
        invoiceFile: action.res,
        invoicesEditInProg: false,
        invoicesEditErr: null
      };
    case invoiceActions.DELETE_INVOICES_OK:
      return {
        ...initialState,
        invoicesDeleteInProg: false,
        invoicesDeleteErr: null
      };
    case invoiceActions.CREATE_INVOICES_FAIL:
      return {
        ...initialState,
        invoicesCreateInProg: false,
        invoicesCreateErr: action.err,
      };
    case invoiceActions.EDIT_INVOICES_FAIL:
      return {
        ...initialState,
        invoicesEditInProg: false,
        invoicesEditErr: action.err,
      };
    case invoiceActions.DELETE_INVOICES_FAIL:
      return {
        ...initialState,
        invoicesDeleteInProg: false,
        invoicesDeleteErr: action.err,
      };
    default:
      return state;
  }
}

export default invoicesReducer;