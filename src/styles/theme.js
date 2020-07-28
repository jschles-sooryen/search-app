import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#282c34',
    },
    secondary: {
      main: '#e5e7eb',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

export default theme;