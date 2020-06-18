import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import Pay from "./components/Artems_Pay_Component/Pay";

import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import * as homeActions from "../_actions/home-actions";
import HomeRender from "./home-render";
import { Dashboard } from "./components/lai_components/dashboard";

const HomePage = (props) => {
  console.log(props);
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
      <Pay/>

      <Grid item style={{ height: "10vh" }}>
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
