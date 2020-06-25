"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HomePage } from './HomePage';
import * as profileActions from '../../_actions/profile-actions';


const PatientContextWrapper = (props) => {
    const dispatch = useDispatch();
    //let info = useSelector((state) => state.profileReducer.profileData);
    useEffect(() => {
        dispatch(profileActions.readProfile());
    }, []);
   
    return(
        <div>
            <HomePage {...props} />
        </div>
    );
}

function mapStateToProps(state){
    return {
        profileData: state.profileReducer.profileData
    }
}

function mapDispatchToProps(dispatch){
    return { 
        actions: bindActionCreators(profileActions, dispatch)
    }
}

PatientContextWrapper.propTypes = {
    actions: PropTypes.object
};

export default connect( 
    mapStateToProps,
    mapDispatchToProps
    )(PatientContextWrapper);
