import { READ_INVOICES_SUCCESFUL, READ_INVOICES_PENDING, READ_INVOICES_FAILURE } from '../_constants/invoice.constants';

export default function invoiceReducer(state = {}, action) {
  switch (action.type) {
    case READ_INVOICES_SUCCESFUL:
      return {...state, invoiceData: { invoices: action.data, requestSucessful: true } };
    case READ_INVOICES_PENDING:
      return {...state, invoiceData: {requestPending: true } };
    case READ_INVOICES_FAILURE:  
      return {...state, invoiceData: { requestFailed: true } };
    default:
      return state;
  }
}
