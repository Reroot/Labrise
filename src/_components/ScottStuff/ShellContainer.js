


"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as shellActions from '../../_actions/shellActions';
import Shell from './Shell';
import * as patientEventActions from '../../_actions/patientEventActions'
//import * as modalDataActions from '../../_actions/modalDataActions'

const ShellContainer = (props) => {
    //console.log("poopie"+props.datedData)
    useEffect(() => {
        const { actions } = props;
        actions.readShellInfo(props.datedData.someOfTheShowDates);
    }, [] );
    //console.log("debugrory"+JSON.stringify(props));
    //console.log("debugrory1"+JSON.stringify(props.patInfoData));
    //console.log("debugrory2"+JSON.stringify(typeof props.patInfoData));
   
    return(
        <div>
            <Shell {...props} />
            
        </div>
    );
}

function mapStateToProps(state, ownProps){
    return {
        shellInfoData: state.shellReducer.shellInfoData,
        //penis: ownProps.datedData
    }
}

function mapDispatchToProps(dispatch){
    return { 
        actions: bindActionCreators(shellActions, dispatch),
        action1: (someValue) => dispatch(patientEventActions.readPatInfo(someValue))
    }
}

ShellContainer.propTypes = {
    actions: PropTypes.object
};

export default connect( 
    mapStateToProps,
    mapDispatchToProps
    )(ShellContainer);