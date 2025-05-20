import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7da87b', // Ghibli green
    },
    secondary: {
      main: '#f7c59f', // Soft peach
    },
    background: {
      default: '#f5f3e7', // Warm, cozy background
      paper: '#fffaf3',
    },
    text: {
      primary: '#3e3e3e',
      secondary: '#7a7265',
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: 'Quicksand, Arial, sans-serif',
    h4: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
});

export default theme; 