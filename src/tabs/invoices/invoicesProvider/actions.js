import * as ACTIONS from './constants';

export const getInvoices = () => {
  return {
    type: ACTIONS.GET_INVOICES
  }
};

export const getInvoicesOk = (data) => {
  return {
    type: ACTIONS.GET_INVOICES_OK,
    data
  }
};

export const getInvoicesFail = (err) => {
  return {
    type: ACTIONS.GET_INVOICES_FAIL,
    err
  }
};

export const createInvoices = (invoice) => {
  return {
    type: ACTIONS.CREATE_INVOICES,
    invoice
  }
};

export const createInvoicesOk = (res) => {
  return {
    type: ACTIONS.CREATE_INVOICES_OK,
    res
  }
};

export const createInvoicesFail = (err) => {
  return {
    type: ACTIONS.CREATE_INVOICES_FAIL,
    err
  }
};

export const editInvoices = (invoice) => {
  return {
    type: ACTIONS.EDIT_INVOICES,
    invoice
  }
};

export const editInvoicesOk = (res) => {
  return {
    type: ACTIONS.EDIT_INVOICES_OK,
    res
  }
};

export const editInvoicesFail = (err) => {
  return {
    type: ACTIONS.EDIT_INVOICES_FAIL,
    err
  }
};

export const deleteInvoices = (invoices) => {
  return {
    type: ACTIONS.DELETE_INVOICES,
    invoices
  }
};

export const deleteInvoicesOk = () => {
  return {
    type: ACTIONS.DELETE_INVOICES_OK
  }
};

export const deleteInvoicesFail = (err) => {
  return {
    type: ACTIONS.DELETE_INVOICES_FAIL,
    err
  }
};