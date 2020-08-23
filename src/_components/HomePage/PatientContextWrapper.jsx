"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import  HomePage_Container  from './lai_home-Container';
import * as profileActions from '../../_actions/profile-actions';
import ProfileWrapper from "../Profile/ProfileWrapper";


const PatientContextWrapper = (props) => {
    console.log("props in Patient Context Wrapper");
    console.log(props);
    const dispatch = useDispatch();
    let info = useSelector((state) => state.authentication.user);
    console.log(info);
    useEffect(() => {
        dispatch(profileActions.readProfile(info["email"]));
        // dispatch(profileActions.readProfile(props.User["email"]));
    }, []);
   
    return(
        <div>
            {/* <ProfileWrapper {...props} /> */}
            <HomePage_Container {...props} />
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
