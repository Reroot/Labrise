


"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as patientEventActions from '../../_actions/patientEventActions';
import PatEventRender from './patEventRender';
import * as modalDataActions from '../../_actions/modalDataActions'

const PatEventContainer = (props) => {

    useEffect(() => {
        const { actions } = props;
        actions.readPatInfo(props.someData);
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
        ddd:ownProps.someDates,//dont really need these
        num:ownProps.perLoad
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
