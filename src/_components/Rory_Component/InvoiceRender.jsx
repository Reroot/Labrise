"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import { InvoiceStyles } from "../../_styles/InvoiceStyle";
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

const InvoiceRender = ({ invoiceData }) => {
    const useStyles = InvoiceStyles();

    function createInvoiceRow(invoice){
        return (
            <TableRow key={invoice.invoicenumber}>
                <TableCell > {invoice.invoicenumber} </TableCell>
                <TableCell> {invoice.name} </TableCell>
                <TableCell> {"$" + invoice.msdyn_amountdue} </TableCell>
            </TableRow>
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
            (
                <TableContainer component={Paper} className={useStyles.TableContainer}>
                    <Table className={useStyles.Table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {invoiceData.invoices.value.map((invoice) => createInvoiceRow(invoice))}
                        </TableBody>    
                    </Table>
                </TableContainer>
            )
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
            <h1 className={useStyles.HeadingText}>Invoices:</h1>
            {content}
        </div>
    );
}

InvoiceRender.propTypes = {
    invoiceData: PropTypes.object
};

export default InvoiceRender;
