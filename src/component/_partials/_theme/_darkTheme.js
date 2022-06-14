import { ThemeOptions } from "@mui/material";
import {grey, deepOrange} from "@mui/material/colors";

export const darkPalette = {
    50: '#f4f8fb',
    100: '#e4eef5',
    200: '#d2e3ef',
    300: '#c0d7e8',
    400: '#b3cfe3',
    500: '#a5c6de',
    600: '#9dc0da',
    700: '#93b9d5',
    800: '#8ab1d1',
    900: '#79a4c8',
    A100: '#ffffff',
    A200: '#ffffff',
    A400: '#e5f3ff',
    A700: '#cbe7ff',
    'contrastDefaultColor': 'dark',
};

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      light: darkPalette[300],
      main: darkPalette[500],
      dark: darkPalette[700],
    },
    secondary: {
      light: darkPalette[900],
      main:  darkPalette[500],
      dark: darkPalette[700],
    },
  },
  spacing: 4
};