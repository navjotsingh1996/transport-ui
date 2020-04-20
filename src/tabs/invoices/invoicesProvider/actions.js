import * as ACTIONS from './constants';

/*
export const getDeployedDocText = (planId, deviceId) => {
  return {
    type: ACTIONS.GET_DEPLOYED_DOC_TEXT,
    planId,
    deviceId
  };
};

export const getDeployedDocTextOk = (result) => {
  return {
    type: ACTIONS.GET_DEPLOYED_DOC_TEXT_OK,
    result
  };
};

export const getDeployedDocTextFail = (err) => {
  return {
    type: ACTIONS.GET_DEPLOYED_DOC_TEXT_FAIL,
    err
  };
};
 */

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

export const createInvoices = (invoices) => {
  return {
    type: ACTIONS.CREATE_INVOICES,
    invoices
  }
};

export const createInvoicesOk = () => {
  return {
    type: ACTIONS.CREATE_INVOICES_OK
  }
};

export const createInvoicesFail = (err) => {
  return {
    type: ACTIONS.CREATE_INVOICES_FAIL,
    err
  }
};

export const editInvoices = (invoices) => {
  return {
    type: ACTIONS.EDIT_INVOICES,
    invoices
  }
};

export const editInvoicesOk = () => {
  return {
    type: ACTIONS.EDIT_INVOICES_OK
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