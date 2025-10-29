import { createTheme } from "@mui/material/styles";
import "@fontsource/merriweather"; // 👈 Import Google font

const theme = createTheme({
  typography: {
    fontFamily: `"Merriweather", serif`,
  },
  palette: {
    primary: {
      main: "#1976d2", // you can adjust this
    },
    secondary: {
      main: "#9e9e9e",
    },
  },
});

export default theme;
