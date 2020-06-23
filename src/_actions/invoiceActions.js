import axios from 'axios'
import { adalApiFetch } from "../_adalconfig/adalConfig";
import { READ_INVOICES_SUCCESFUL, READ_INVOICES_FAILURE, READ_INVOICES_PENDING} from '../_constants/invoice.constants';

export const readInvoices = (contactID) => {
  // header info for the fetchUrl
  // add TIMER HEADER
  let config = {
    method: "get",
    "OData-MaxVersion": 4.0,
    "OData-Version": 4.0,
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    headers: {
      Prefer: "odata.include-annotations=*",
    },
  };
  return dispatch => {
      dispatch(_readInvoicesStarted());

    //   "https://notsmooth.api.crm.dynamics.com/api/data/v9.1/invoices?$select=invoicenumber,msdyn_amountdue,name&$filter=_customerid_value eq 74290A68-639C-EA11-A811-000D3A58FEF8"
      let url = "https://notsmooth.api.crm.dynamics.com/api/data/v9.1/invoices?$select=invoicenumber,msdyn_amountdue,name&$filter=_customerid_value eq " + contactID;
      
      adalApiFetch(
        axios,
        url,
        config
      )
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