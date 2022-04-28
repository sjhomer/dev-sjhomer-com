import {createTheme} from "@mui/material"

const config = {
  palette: {
    mode: 'dark',
  },
  typography: {
    subtitle1: {
      fontSize: 20,
    },
    body1: {
      fontSize: 18,
    },
    fontFamily: [
      'Ubuntu',
      'sans-serif'
    ].join(','),
  },
}

// @ts-ignore
const theme = createTheme(config)

export default theme