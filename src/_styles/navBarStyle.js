import { makeStyles } from "@material-ui/core/styles";

const navStyles = makeStyles({
  navBar: {
    height: "4.75rem",
    padding: "0px",
  },
  navButtonGroup: {
    width: "100%",
  },
  navButton: {
    padding: "0rem 0rem 0rem 0rem",
    height: "4.75rem",
    overflow: "hidden",
    // whiteSpace: "nowrap",
    
    wordWrap: "break-word",
  },
  navButtonLink: {
    color: "White",
    flexDirection: "row",
    display: "contents",
    textDecoration: "none",
    width: "100%",
    textOverflow: "ellipsis",
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
    //  height: "4.75rem",
  },
});

export { navStyles };
