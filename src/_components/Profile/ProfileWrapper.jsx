"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as profileActions from '../../_actions/profile-actions';
import ProfilePage from './profile';

const ProfileContainer = (props) => {
//     console.log("these are the props in InvoiceContainer");
//   console.log(props);
    const dispatch = useDispatch();
//     // reset login status
//     useEffect(() => {
    //         dispatch(profileActions.readProfile());
    //     }, []);
    let info = useSelector((state) => state.authentication.user);
    console.log("info before useEffect");
    console.log(info);
    useEffect(() => {
        dispatch(profileActions.readProfile(info["email"]));
    }, []);
    console.log("info before useEffect");
        console.log(info);
   
    return(
        <div>
            <ProfilePage {...props} />
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

ProfileContainer.propTypes = {
    actions: PropTypes.object
};

export default connect( 
    mapStateToProps,
    mapDispatchToProps
    )(ProfileContainer);
