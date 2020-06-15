import axios from 'axios'

import { READ_INVOICES_SUCCESFUL, READ_INVOICES_FAILURE, READ_INVOICES_PENDING} from '../_constants/invoice.constants';

export const readInvoices = () => {
  return dispatch => {
      dispatch(_readInvoicesStarted());

      return axios.get(`https://run.mocky.io/v3/56d11790-ed77-473e-bf4b-b8be591e33f9`)
      .then(res => {
          dispatch(_readInvoicesSuccess(res));
      })
      .catch( (error) => {
          console.log(error);
          dispatch(_readInvoicesFailed(error));
      });


  };
}

const _readInvoicesSuccess = (res) => {
    return {
        type: READ_INVOICES_SUCCESFUL,
        data:  res.data
    };
}

const _readInvoicesFailed = (error) => {
    return {
        type: READ_INVOICES_FAILURE,
        error  
    };
}

const _readInvoicesStarted = () => {
    return {
        type: READ_INVOICES_PENDING
    };
}