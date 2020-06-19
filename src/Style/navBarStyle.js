import { makeStyles } from "@material-ui/core/styles";
const navStyles = makeStyles({
  navBar: { height: "10vh" },
  navButton: {},
  navButtonLink: {
    color: "White",
    flexDirection: "row",
    display: "flex",
    textDecoration: "none",
  },
  accountBoxIcon: {
    fontSize: "4.5rem",
  },
  navProfileButton: { padding: ".25rem 0rem 0rem .125rem" },
});

export { navStyles };
