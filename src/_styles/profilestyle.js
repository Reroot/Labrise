import { makeStyles } from "@material-ui/core/styles";

const ProfileStyles = makeStyles({
  textField: {
    margin: ".6rem",
  },
  textFieldAdornment: {
    margin: ".6rem",
    width: "205px",
  },
  container: {
    height: "84vh",
    backgroundImage:
      "linear-gradient(to bottom right, white, rgb(196, 180, 255,.4));",
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: "1rem",
  },
});

export { ProfileStyles };
