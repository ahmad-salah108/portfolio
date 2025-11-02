"use client";

import { createTheme } from "@mui/material/styles";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#eab308ff",
    },
    black: {
      main: "#000",
    },
    white: {
      main: "#fff",
    },
    background: {
      default: "#000",
      paper: "#000",
    },
    paper: {
      main: "rgb(18, 18, 18)",
    },
    btnBlackTransparent: {
      main: "rgba(0, 0, 0, 0.6)",
    },
    paperTransparent: {
      main: "rgb(50, 50, 50, 0.5)",
    },
  },
  typography: {
    fontFamily: open_sans.style.fontFamily,
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    black: Palette["primary"];
    white: Palette["primary"];
    paper: Palette["primary"];
    btnBlackTransparent: Palette["primary"];
    paperTransparent: Palette["primary"];
  }

  interface PaletteOptions {
    black?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
    paper?: PaletteOptions["primary"];
    btnBlackTransparent?: PaletteOptions["primary"];
    paperTransparent?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    black: true;
    white: true;
    paper: true;
    btnBlackTransparent: true;
    paperTransparent: true;
  }
}

export default theme;
