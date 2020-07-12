"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as invoiceActions from '../../_actions/invoiceActions';
import InvoiceRender from './InvoiceRender';

const InvoiceContainer = (props) => {
//     console.log("these are the props in InvoiceContainer");
//   console.log(props);
    const dispatch = useDispatch();
//     // reset login status
//     useEffect(() => {
    //         dispatch(profileActions.readProfile());
    //     }, []);
    let info = useSelector((state) => state.profileReducer.profileData);
    console.log("info before useEffect");
    console.log(info);
    useEffect(() => {
        dispatch(invoiceActions.readInvoices(info.pData.value[0]["contactid"]));
    }, []);
    console.log("info before useEffect");
        console.log(info);
   
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
