import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { lightGreen, red, yellow } from '@material-ui/core/colors';

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
    }
  },
});

export default CustomTheme;