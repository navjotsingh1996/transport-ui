import * as invoiceActions from './constants';

const initialState = {
  getInvoicesInProg: false,
  getInvoicesErr: null,
  invoices: [],
  invoicesUpdateInProg: false,
  invoicesUpdateErr: false,
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
    case invoiceActions.EDIT_INVOICES:
    case invoiceActions.DELETE_INVOICES:
      return {
        ...initialState,
        invoicesUpdateInProg: true
      };
    case invoiceActions.CREATE_INVOICES_OK:
    case invoiceActions.EDIT_INVOICES_OK:
    case invoiceActions.DELETE_INVOICES_OK:
      return {
        ...initialState,
        invoicesUpdateInProg: false,
        invoicesUpdateErr: null
      };
    case invoiceActions.CREATE_INVOICES_FAIL:
    case invoiceActions.EDIT_INVOICES_FAIL:
    case invoiceActions.DELETE_INVOICES_FAIL:
      return {
        ...initialState,
        invoicesUpdateInProg: false,
        invoicesUpdateErr: action.err,
      };
    default:
      return state;
  }
}

export default invoicesReducer;