


"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as beetleActions from '../../_actions/beetleActions';
import Beetle from './Beetle';
import * as shellActions from '../../_actions/shellActions'
//import * as patientEventActions from '../../_actions/patientEventActions'


const BeetleContainer = (props) => {

    useEffect(() => {
        const { actions } = props;
        actions.readBeetleInfo();
    }, [] );
   
    return(
        <div>
            <Beetle {...props} />
            
        </div>
    );
}

function mapStateToProps(state){
    return {
        beetleInfoData: state.beetleReducer.beetleInfoData
    }
}

function mapDispatchToProps(dispatch){
    return { 
        actions: bindActionCreators(beetleActions, dispatch),
        action1: (someValue => dispatch(shellActions.readShellInfo(someValue)))
    }
}



export default connect( 
    mapStateToProps,
    mapDispatchToProps
    )(BeetleContainer);