import { createMuiTheme } from '@material-ui/core/styles';
import themeData from "./theme.json";

const themeName = 'IAISC_THEME';
export default createMuiTheme({ ...themeData, themeName });