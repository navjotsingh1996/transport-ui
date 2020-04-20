// ...
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import invoicesReducer from './tabs/invoices/invoicesProvider/invoicesReducer';
import invoicesSaga from './tabs/invoices/invoicesProvider/sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  invoicesReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(invoicesSaga);
