import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../_actions";
import Pay from "../PayComponent/Pay";

import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import HomeRender from "./home-render";
import { Dashboard } from "../LabResultsComponent/dashboard";

const HomePage = (props) => {
  console.log("these are the props in homePage");
  console.log(props);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const { actions } = props;
  //   dispatch(actions.readProfile());
  //   // this.setState(info.value[0]);
  // }, []);
  const [patientDynamicsRecord, setPatientDynamicsRecord] = useState({});
  let info = useSelector((state) => state.profileReducer.profileData);
  console.log("this is info in homePage after calling useSelector on profile reducer");
  console.log(info);
  //let info = useSelector((state) => state.homeReducer.profileData);

  return (
    <Grid container direction="column" style={{ height: "84vh" }}>
      <Grid item style={{ height: "4vh" }}>
        <Link to="/patient">Your Patient History</Link>
      </Grid>
      <Grid item style={{ height: "75vh" }}>
        <Dashboard />
        {/* <Corona />   */}
      </Grid>
      <Pay />

      <Grid item style={{ height: "10vh" }}></Grid>
    </Grid>
  );
};

// function mapStateToProps(state) {
//   return {
//     data: state.homeReducer.data,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(homeActions, dispatch),
//   };
// }

// HomePage.propTypes = {
//   actions: PropTypes.object,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

export { HomePage };
