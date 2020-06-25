"use strict";

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";

import { bindActionCreators } from "redux";
import * as coronaActions from "../../_actions/coronaActions";
import CoronaRender from "./CoronaRender";
import { ThemeProvider, useTheme } from "@material-ui/core";
import CustomTheme from "../../_styles/MUITheme";

import CoronaNational from "./CoronaNational";
import CoronaState from "./CoronaState";

import * as profileActions from '../../_actions/profile-actions';
const CoronaPanel = (props) => {
    console.log("props in the CoronaPanel");
    console.log(props);

    useSelector((state) => state.profileReducer.profileData);

  return (
    <div style={{backgroundImage: "linear-gradient(to bottom right, white, rgb(196, 180, 255,.4))",}}>
        <CoronaNational {...props} />
        <CoronaState {...props} />
    </div>
  );
};


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

CoronaPanel.propTypes = {
    actions: PropTypes.object
};

export default connect( 
    mapStateToProps,
    mapDispatchToProps
    )(CoronaPanel);
