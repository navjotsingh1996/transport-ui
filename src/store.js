// ...
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer';
import invoicesSaga from './tabs/invoices/invoicesProvider/sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(invoicesSaga);
