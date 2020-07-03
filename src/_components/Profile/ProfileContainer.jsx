"use strict"

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as profileActions from '../../_actions/profile-actions';
import { ProfilePage } from './profile';

const ProfileContainer = (props) => {
    const dispatch = useDispatch();
    let info = useSelector((state) => state.authentication.user);
    useEffect(() => {
        dispatch(profileActions.readProfile(info["email"]));
      }, []);
   
    return(
        <div>
         {/* <div style={{backgroundImage: "linear-gradient(to bottom right, white, rgb(196, 180, 255,.4))",}}> */}
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
