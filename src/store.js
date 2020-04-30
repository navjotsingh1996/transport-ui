// ...
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer';
import invoicesSaga from './tabs/invoices/invoicesProvider/sagas';

/**
 * Creates the Redux store with all of the reducers used by the application. Also runs the
 * Saga middleware
 */
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(invoicesSaga);
