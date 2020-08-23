


"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as modalDataActions from '../../_actions/modalDataActions';
import ModalData from './ModalData';

const ModalDataContainer = (props) => {
    let theString="";
    theString=props;

    useEffect(() => {
        const { actions } = props;
        actions.readModalDataInfo(props.theValue);
    }, [] );
   
    return(
        <div>
            <ModalData {...props} />
            
        </div>
    );
}

function mapStateToProps(state){
    return {
        modalDataInfo: state.modalDataReducer.modalData
    }
}

function mapDispatchToProps(dispatch){
    return { 
        actions: bindActionCreators(modalDataActions, dispatch)
    }
}

ModalDataContainer.propTypes = {
    actions: PropTypes.object
};

export default connect( 
    mapStateToProps,
    mapDispatchToProps
    )(ModalDataContainer);
