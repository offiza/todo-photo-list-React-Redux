import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { grey, purple } from '@mui/material/colors';

const theme: Theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: grey[900],
    },
  },
});

export default theme;