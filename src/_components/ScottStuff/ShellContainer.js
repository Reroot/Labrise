


"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as shellActions from '../../_actions/shellActions';
import Shell from './Shell';
import * as patientEventActions from '../../_actions/patientEventActions'

const ShellContainer = (props) => {

    let info = useSelector((state) => state.profileReducer.profileData);
    const dataToPass= {
        dates:props.datedData.someOfTheShowDates,
        cid:info.pData.value[0].contactid
    }
    useEffect(() => {
        const { actions } = props;
        actions.readShellInfo(dataToPass);
    }, [] );

   
    return(
        <div>
            <Shell {...props} />
            
        </div>
    );
}

function mapStateToProps(state, ownProps){
    return {
        shellInfoData: state.shellReducer.shellInfoData,
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