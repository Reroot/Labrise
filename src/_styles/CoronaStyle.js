import { makeStyles } from "@material-ui/core/styles";
import CustomTheme from './MUITheme';

const CoronaStyles = makeStyles((theme) => ({
  
  HeadingText: {
    font: "normal normal bold large/normal Domine, serif",
    color: "#2c2ce8",
  },
  Table: {
    font: "normal normal bold large/normal Domine, serif",
  },
  TableContainer: {
    font: "normal normal bold large/normal Domine, serif",
    width: "50%",
  },
  paper: {
        padding:theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        font: "normal normal bold large/normal Domine, serif",
    },
    good: {
            padding:theme.spacing(1),
            textAlign: 'center',
            background: theme.palette.success,                
        },
    bad: {
        padding:theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.error,
        font: "normal normal bold large/normal Domine, serif",
    },
    neutral: {
        padding:theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.warning,
        font: "normal normal bold large/normal Domine, serif",
    },
}));

export default CoronaStyles;
