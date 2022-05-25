import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { padding } from '@mui/system';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    // Name of the component
    MuiToolbar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          minHeight: '68px',
          justifyContent: 'center',
          padding: '15px'
        },
      },
    },
  },
});

export default theme;
