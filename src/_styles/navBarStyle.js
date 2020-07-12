import { makeStyles } from "@material-ui/core/styles";

const navStyles = makeStyles({
  navBar: {
    height: "4.75rem",
    padding: "0px",
    margin: "0rem",
  },
  navButtonGroup: {
    width: "100%",
  },
  navButton: {
    padding: "0rem 0rem 0rem 0rem",
    height: "4.75rem",
    overflow: "hidden",
    backgroundImage: "linear-gradient(to bottom right,#3451f3, #000730)",
    border: "2px solid #72ddb4",  
    // whiteSpace: "nowrap",
    
    wordWrap: "break-word",
  },
  navButtonLink: {
    color: "White",
    flexDirection: "row",
    // display: "contents",
        display: "flex",
    textDecoration: "none",
    width: "100%",
    textOverflow: "ellipsis",
    color: "white",
    //     flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        outline: "none",
    //     textDecoration: "none",
    //     width: "100%",
    //     height: "45px"
  },
  accountBoxIcon: {
    fontSize: "4.5rem",
    padding: "0px",
    overflow: "hidden",
  },
  navProfileButton: {
    height: "4.75rem",
    // padding: ".25rem .125rem 0rem .125rem",
    overflow: "hidden",
    minWidth: "18px",
    // color: "primary",
  },
  navProfile: {
    height: "4.75rem",
    // justify: "center",
    textAlign: "center",
    width: "100%",
    overflow: "hidden",
    // borderStyle: "dotted",
    // borderColor: "Red",
  },
  logo: {
     height: "4.75rem",
  },
  logoLink: {
        outline: "none"
      }
});

export { navStyles };

// import { makeStyles } from "@material-ui/core/styles";
// const navStyles = makeStyles({
//   navBar: {
//     margin: "0rem",
//   },
//   navButton: {
//     padding: "0rem",
//     height: "45px",
    
//     /*
//     This following style command will add a blue color gradient to 
//     the Navigation Bar buttons. If you don't like it, comment it out.
//     */
//     //backgroundImage: "linear-gradient(to bottom right,#3451f3, #000730)"
//   },
//   navButtonLink: {
//     color: "white",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     textDecoration: "none",
//     outline: "none",
//     width: "100%",
//     height: "45px"
//   },
//   accountBoxIcon: {
//     fontSize: "3.3rem",
//   },
//   navProfileButton: {
//     padding: "0rem 0rem"
//   },
//   navProfile: {
//     textAlign: "center"
//   },
//   logo: {},
//   logoLink: {
//     outline: "none"
//   }
// });

// export { navStyles };
