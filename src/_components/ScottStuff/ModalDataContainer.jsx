


"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as modalDataActions from '../../_actions/modalDataActions';
//import PatEventRender from '../components/ModalData';
import ModalData from './ModalData';

const ModalDataContainer = (props) => {
    let theString="";
    theString=props;
    //console.log("props:"+JSON.stringify(props))
    useEffect(() => {
        const { actions } = props;
        actions.readModalDataInfo(props.theValue);
    }, [] );
    //console.log("debugrory"+JSON.stringify(props));
    //console.log("debugrory1"+JSON.stringify(props.patInfoData));
    //console.log("debugrory2"+JSON.stringify(typeof props.patInfoData));
   
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
