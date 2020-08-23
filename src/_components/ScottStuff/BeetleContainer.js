


"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as beetleActions from '../../_actions/beetleActions';
import Beetle from './Beetle';
import * as shellActions from '../../_actions/shellActions'





const BeetleContainer = (props) => {

    let info = useSelector((state) => state.profileReducer.profileData);
    const rCid=info.pData.value[0].contactid;

    useEffect(() => {
        const { actions } = props;
        actions.readBeetleInfo(rCid);
    }, [] );
   
    return(
        <div>
            <Beetle {...props} />
            
        </div>
    );
}

function mapStateToProps(state){
    return {
        beetleInfoData: state.beetleReducer.beetleInfoData,
        number:state.profileReducer.profileData.pData.value[0].contactid
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