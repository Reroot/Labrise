/************************************************************************************
This is the Container for connecting the Lab Results rendering to the Store/State
************************************************************************************/
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as labResults_Actions from '../../_actions/labResults-Actions';
import { LabReports_Render } from './labReports-Render';
import { Dashboard_Render  } from './dashboard-Render';
import '../../_styles/lai_styling.css';


// Define the Container for the Lab Report Viewer component
const LabReports_Container = (props) => {
    
    const dispatch = useDispatch();
    
    //let patientInfo = useSelector( (state) => state.profileReducer.profileData );
    //console.log("patient info, before useEffect");
    //console.log(patientInfo);
    
    // Initiate the reading of Lab Result records
    useEffect( () => {
        dispatch( labResults_Actions.readLabResults("Hyperlipidemia") );
        //dispatch(labResults_Actions.readLabResults(info.pData.value[0]["contactid"]));
    }, [] );
    
    // Render the actual Lab Report Viewer component
    return (
        <div>
            <LabReports_Render {...props} />
        </div>
    );
}

// Define the Container for the Dashboard component
const Dashboard_Container = (props) => {
    
    const dispatch = useDispatch();
    
    //let patientInfo = useSelector( (state) => state.profileReducer.profileData );
    //console.log("patient info, before useEffect");
    //console.log(patientInfo);
    
    // Initiate the reading of Lab Result records
    useEffect( () => {
        dispatch( labResults_Actions.readLabResults("Hyperlipidemia") );
        //dispatch(labResults_Actions.readLabResults(info.pData.value[0]["contactid"]));
    }, [] );
    
    // Render the actual Dashboard component
    return (
        <div>
            <Dashboard_Render {...props} />
        </div>
    );
}

// Function for extracting a subset of the state, then transferring it as input 'props'
function mapStateToProps(state) {
    return {
        labResults_Data: state.labResults_Reducer.labResults_Data
    };
}

// Function for binding the Action types to Action creators
function mapDispatchToProps(dispatch) {
    return { 
        actions: bindActionCreators(labResults_Actions, dispatch)
    };
}

// Declare the accepted types of 'props' for the Lab Report Viewer's Container
LabReports_Container.propTypes = {
    actions: PropTypes.object
};

// Declare the accepted types of 'props' for the Dashboard's Container
Dashboard_Container.propTypes = {
    actions: PropTypes.object
};

// Connect the Lab Report Viewer's Container to the Store/State
export const LabReports_Component = connect( 
    mapStateToProps,
    mapDispatchToProps
)(LabReports_Container);

// Connect the Dashboard's Container to the Store/State
export const Dashboard_Component = connect( 
    mapStateToProps,
    mapDispatchToProps
)(Dashboard_Container);
