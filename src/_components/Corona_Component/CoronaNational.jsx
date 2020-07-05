"use strict";

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as coronaActions from "../../_actions/coronaActions";
import CoronaRender from "./CoronaRender";
import { ThemeProvider, useTheme } from "@material-ui/core";
import CustomTheme from "../../_styles/MUITheme";
import  CoronaStyles  from "../../_styles/CoronaStyle";

const CoronaNational = (props) => {
  const useStyles = CoronaStyles();
  useEffect(() => {
    const { actions } = props;
    const coronaParams = { state: "US", date: null };
    actions.readCoronaData(coronaParams);
  }, []);

  return (
    <div>
        <h1 className={useStyles.HeadingText}>National Data --</h1>
        <br />
        <CoronaRender {...props} />
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

CoronaNational.propTypes = {
  actions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoronaNational);
