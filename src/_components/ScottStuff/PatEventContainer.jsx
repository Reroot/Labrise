


"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as patientEventActions from '../../_actions/patientEventActions';
import PatEventRender from './PatEventRender';
import * as modalDataActions from '../../_actions/modalDataActions'

const PatEventContainer = (props) => {
    console.log("RORYISSOTIRED"+JSON.stringify(props.someData))
    let info = useSelector((state) => state.profileReducer.profileData);

    const dataToPass={
        dateData:props.someData,
        cid:info.pData.value[0].contactid
    }

    useEffect(() => {
        const { actions } = props;
        actions.readPatInfo(dataToPass);
    }, [] );

    return(
        <div>
            <PatEventRender {...props} />
            
        </div>
    );
}

function mapStateToProps(state,ownProps){
    return {
        patInfoData: state.patEventReducer.patInfoData,
        number1:state.profileReducer.profileData.pData.value[0].contactid,
        num:ownProps.someData.buttonValue,

    }
}

function mapDispatchToProps(dispatch){
    return { 
        actions: bindActionCreators(patientEventActions, dispatch),
        action2: (value)=> dispatch(modalDataActions.readModalDataInfo(value)),
        action3: ()=> dispatch(modalDataActions.rModalVis(modalDataActions.RModalVisSt.BLOCK))
    }
}

PatEventContainer.propTypes = {
    actions: PropTypes.object
};

export default connect( 
    mapStateToProps,
    mapDispatchToProps
    )(PatEventContainer);
