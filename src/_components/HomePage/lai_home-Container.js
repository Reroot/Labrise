/************************************************************************************
This is the Container for connecting the Home Page rendering to the Store/State
************************************************************************************/
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as profileActions from '../../_actions/profile-actions';
import * as labResults_Actions from '../../_actions/labResults-Actions';
import { HomePage_Render } from './lai_home-Render';
import '../../_styles/lai_styling.css';


// Define the Container for the Home Page component
const HomePage_Container = (props) => {
    
    const dispatch = useDispatch();
    
    useEffect( () => {
        // dispatch( profileActions.readProfile() );
        dispatch( labResults_Actions.readLabResults("Hyperlipidemia") );
    }, [] );

    return(
        <div>
            <HomePage_Render {...props} />
        </div>
    );
}

// Function for extracting a subset of the state, then transferring it as input 'props'
function mapStateToProps(state) {
    return {
        // profileData: state.profileReducer.profileData,
        labResults_Data: state.labResults_Reducer.labResults_Data
    }
}

// Function for binding the Action types to Action creators
function mapDispatchToProps(dispatch) {
    return { 
        actions: bindActionCreators(profileActions, dispatch),
        labActions: bindActionCreators(labResults_Actions, dispatch)
    }
}

// Declare the accepted types of 'props' for the Home Page's Container
HomePage_Container.propTypes = {
    actions: PropTypes.object
};

// Connect the Home Page's Container to the Store/State
export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(HomePage_Container);
