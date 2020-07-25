import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#282c34',
    },
    secondary: {
      main: '#e5e7eb',
    },
    lightBlue: {
      main: '#61dafb',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

export default theme;