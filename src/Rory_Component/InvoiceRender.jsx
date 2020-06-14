"use strict"

import React from 'react';
import PropTypes from 'prop-types';

const InvoiceRender = ({ invoiceData }) => {

    function createInvoiceRow(invoice){
        return (
            <tr key={invoice.invoice_ID}>
                <td> {invoice.invoice_ID} </td>
                <td> {invoice.amount} </td>
                <td> {invoice.due_date} </td>
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
                        <th>Amount</th>
                        <th>DueDate</th>
                    </tr>
                </thead>
                <tbody>
                    {invoiceData.invoices.map((invoice) => createInvoiceRow(invoice))}
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
    invocieData: PropTypes.object
};

export default InvoiceRender;
