"use strict";

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as coronaActions from "../../_actions/coronaActions";
import CoronaRender from "./CoronaRender";
import { ThemeProvider, useTheme } from "@material-ui/core";
import CustomTheme from "../../_styles/MUITheme";

const CoronaState = (props) => {
    console.log("These are the props in CoronaState");
    console.log(props);
    const info = useSelector((state) => {state.profileReducer.profileData});
    // if(info && info.requestSuccessful){
    //     useEffect(() => {
    //         const { actions } = props;
    //         const coronaParams = { state: info.pData.value[0]["address1_stateorprovince"], date: null };
    //         actions.readCoronaData(coronaParams);
    //     }, []);
    // }
    let stateOrProvince = "";
    let content = "";

    if(!info || info.requestPending){
        content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div> 
            </div>
        );
    }

    if(info && info.requestFailed){
        content = 
        (
            <div className="alert alert-danger" role="alert">
                Error while retrieving patient context!
            </div>
        );
    }

    if(info && info.requestSuccessful){
        stateOrProvince = info.pData.value[0]["address1_stateorprovince"];
        useEffect(() => {
          const { actions } = props;
          const coronaParams = { state: stateOrProvince, date: null };
          actions.readCoronaData(coronaParams);
        }, []);

        content = (
            <div>
                <h1>Data For Your State of: {stateOrProvince}</h1>
                <CoronaRender {...props} />
            </div>
        );
    }

  return (
    <div>
        {/* {content} */}
        {/* <h1>Data For Your State</h1>
        <CoronaRender {...props} /> */}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    coronaData: state.CoronaReducer.coronaData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(coronaActions, dispatch),
  };
}

CoronaState.propTypes = {
  actions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoronaState);
