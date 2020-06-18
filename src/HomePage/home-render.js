"use strict";
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

const HomeRender = (data) => {
  console.log(data);
  function createHome(info) {
    return <Grid item>Your name is :{info.pData.value[0]["firstname"]}</Grid>;
  }
  let content = "";
  // if data is pending or falsey
  if (!data || data.requestPending) {
    console.log("pending");
    content = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  if (data && data.requestSuccessful) {
    console.log("success");
    content = <Grid container>{createHome(data)}</Grid>;
    // content = <h1>Hi im paul</h1>;
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
