import {createTheme} from "@mui/material"

const config = {
  typography: {
    fontFamily: [
      'Ubuntu',
      'sans-serif'
    ].join(','),
  },
}

const theme = createTheme(config)

export default theme