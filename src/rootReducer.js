import { combineReducers } from 'redux';
import invoicesReducer from "./tabs/invoices/invoicesProvider/invoicesReducer";

const rootReducer = combineReducers({ invoice: invoicesReducer });

export default rootReducer;