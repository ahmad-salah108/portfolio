"use client";

// import { amber } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#eab308', // amber[500]
    },
    black: {
      main: "#000",
    },
    white: {
      main: '#fff'
    },
    gold: {
      main: '#eab308',
    },
    background: {
      default: '#000',
      paper: '#000'
    }
  },
  typography: {
    fontFamily: open_sans.style.fontFamily,
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    black: Palette["primary"];
    gold: Palette["primary"];
    white: Palette["primary"];
  }

  interface PaletteOptions {
    black?: PaletteOptions["primary"];
    gold?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    black: true;
    gold: true;
    white: true;
  }
}

// declare module '@mui/material/styles' {
//   interface PaletteColor {
//     lighter?: string;
//   }

//   interface SimplePaletteColorOptions {
//     lighter?: string;
//   }
// }


export default theme;
