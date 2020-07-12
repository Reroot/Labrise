import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { lightGreen, red, yellow, blue } from '@material-ui/core/colors';

const CustomTheme = createMuiTheme({
  palette: {
    success: {
        main: lightGreen[500]
    },
    error: {
        main: red[500]
    },
    warning: {
        main: yellow[500]
    },
    text: {
      primary: "#2c2ce8",
      secondary: blue[500],
    },
  },
});

export default CustomTheme;