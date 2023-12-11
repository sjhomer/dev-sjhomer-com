"use client"

import { createTheme } from '@mui/material/styles';

const config = {
  palette: {
    mode: 'dark',
    background: {
      default: '#D9E1F1',
    }
  },
  typography: {
    subtitle1: {
      fontSize: 20,
    },
    body1: {
      fontSize: 18,
      lineHeight: 1.75,
    },
    fontFamily: [
      'Ubuntu',
      'sans-serif',
    ].join(','),
  },
  components: {
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: 16,
        },
      },
    },
  },
}

// @ts-ignore
const theme = createTheme(config)

export default theme
