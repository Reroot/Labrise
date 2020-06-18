import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import Pay from "./components/Artems_Pay_Component/Pay";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import { ButtonGroup, Button } from "@material-ui/core";
import { PatientPage } from "../PatientPage";
import { InvoiceRender } from "../Rory_Component";
import { Link } from "react-router-dom";

import { RetrieveInfo } from "../_services";
import Corona from "./components/Corona_Component/Corona"
import * as homeActions from "../_actions/home-actions";
import HomeRender from "./home-render";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dashboard } from "./components/lai_components/dashboard";

const HomePage = (props) => {
  console.log(props);
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  let info = useSelector((state) => state.homeReducer.profileData);
  useEffect(() => {
    //const { actions } = props;
    dispatch(homeActions.readProfile());
    // dispatch(userActions.getAll());
    // dispatch(homeActions.readProfile());
    // console.log("useeffect");
    // console.log(info);
  }, []);

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id));
  }

  return (
    <Grid container direction="column" style={{ height: "89vh" }}>
      <Grid item style={{ height: "4vh" }}>
        <Link to="/patient">Your Patient History</Link>
      </Grid>
      <Grid item style={{ height: "75vh" }}>
        <HomeRender {...info} />
        <Dashboard/>
        {/* <Corona />   */}
      </Grid>
      

      <Grid item style={{ height: "10vh" }}>
        <Pay />
      </Grid> 
        

      
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
