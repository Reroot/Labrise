/*import React from 'react';

function Rory_Component(){
    return(
        <div className="col-lg-8 offset-lg-2">
            <h2>This is where Rory's Component would go</h2>
        </div>
    );
}

export { Rory_Component };*/


"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as invoiceActions from '../../_actions/invoiceActions';
import InvoiceRender from './InvoiceRender';

const InvoiceContainer = (props) => {

    useEffect(() => {
        const { actions } = props;
        actions.readInvoices();
    }, [] );

   
    return(
        <div>
            <InvoiceRender {...props} />
        </div>
    );
}

function mapStateToProps(state){
    return {
        invoiceData: state.invoiceReducer.invoiceData
    }
}

function mapDispatchToProps(dispatch){
    return { 
        actions: bindActionCreators(invoiceActions, dispatch)
    }
}

InvoiceContainer.propTypes = {
    actions: PropTypes.object
};

export default connect( 
    mapStateToProps,
    mapDispatchToProps
    )(InvoiceContainer);
