"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3b5090", // Chinese Blue
    },
    secondary: {
      main: "#34a09f", // Keppel
    },
    background: {
      default: "#f9fbfd",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "3.5rem",
      fontWeight: 800,
      lineHeight: 1.1,
      color: "#3b5090",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 800,
      color: "#3b5090",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    button: {
      textTransform: "uppercase",
      fontWeight: 700,
      letterSpacing: "0.1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: "0.75rem 1.5rem",
        },
      },
    },
  },
});

export default theme;
