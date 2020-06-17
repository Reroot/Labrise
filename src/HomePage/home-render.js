"use strict";
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

const HomeRender = ({ data }) => {
  function createHome(info) {
    return <Grid item>Your name is :{info["firstname"]}</Grid>;
  }
  let content = "";
  // if data is pending or falsey
  if (!data || data.requestPending) {
    console.log("pending render");
    content = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  if (data && data.requestSuccessful) {
    console.log("success Render");
    <Grid container>{createHome(data)}</Grid>;
  }
  if (data && data.requestFailed) {
    content = (
      <div className="alert alert-danger" role="alert">
        Error while loading info!
      </div>
    );
  }
  return content;
};

HomeRender.propTypes = {
  data: PropTypes.object,
};

export default HomeRender;
