import { createTheme } from "@mui/material";

const config = {
  typography: {
    fontFamily: [
        'Montserrat',
        'sans-serif'
      ].join(','),
    },
  };

const theme = createTheme(config);

export default theme;