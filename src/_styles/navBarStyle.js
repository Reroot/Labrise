import { makeStyles } from "@material-ui/core/styles";
const navStyles = makeStyles({
  navBar: {
    margin: "0rem",
  },
  navButton: {
    padding: "0rem",
    height: "45px",
    
    /*
    This following style command will add a blue color gradient to 
    the Navigation Bar buttons. If you don't like it, comment it out.
    */
    //backgroundImage: "linear-gradient(to bottom right,#3451f3, #000730)"
  },
  navButtonLink: {
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    outline: "none",
    width: "100%",
    height: "45px"
  },
  accountBoxIcon: {
    fontSize: "3.3rem",
  },
  navProfileButton: {
    padding: "0rem 0rem"
  },
  navProfile: {
    textAlign: "center"
  },
  logo: {},
  logoLink: {
    outline: "none"
  }
});

export { navStyles };
