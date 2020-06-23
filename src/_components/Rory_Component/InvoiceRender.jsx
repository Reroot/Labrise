"use strict"

import React from 'react';
import PropTypes from 'prop-types';

const InvoiceRender = ({ invoiceData }) => {

    function createInvoiceRow(invoice){
        return (
            <tr key={invoice.invoicenumber}>
                <td> {invoice.invoicenumber} </td>
                <td> {invoice.name} </td>
                <td> {"$" + invoice.msdyn_amountdue} </td>
            </tr>
        );
    }

    let content = '';

    if(!invoiceData || invoiceData.requestPending){
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>
        );
    }
    

    if(invoiceData && invoiceData.requestSucessful){
        content = 
            (<table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {invoiceData.invoices.value.map((invoice) => createInvoiceRow(invoice))}
                </tbody>    
            </table>)
    }

    if(invoiceData && invoiceData.requestFailed){
        content = 
        (
            <div className="alert alert-danger" role="alert">
                Error while loading invoices!
            </div>
        )
    }
        
    return(
        <div>
            <h1>Invoices</h1>
            {content}
        </div>
    );
}

InvoiceRender.propTypes = {
    invoiceData: PropTypes.object
};

export default InvoiceRender;
