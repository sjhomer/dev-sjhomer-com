import {createTheme} from "@mui/material"

const config = {
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      'Ubuntu',
      'sans-serif'
    ].join(','),
  },
}

// @ts-ignore
const theme = createTheme(config)

export default theme