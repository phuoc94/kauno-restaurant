import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    // Inputs
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFF',
        },
      },
    },
  },

  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
