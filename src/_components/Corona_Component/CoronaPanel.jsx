"use strict";

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as coronaActions from "../../_actions/coronaActions";
import CoronaRender from "./CoronaRender";
import { ThemeProvider, useTheme } from "@material-ui/core";
import CustomTheme from "../../_styles/MUITheme";

import CoronaNational from "./CoronaNational";
import CoronaState from "./CoronaState";

const CoronaPanel = (props) => {
    console.log("props in the CoronaPanel");
    console.log(props);
  return (
    <div>
        <CoronaNational {...props} />
        <CoronaState {...props} />
    </div>
  );
};

export default CoronaPanel;