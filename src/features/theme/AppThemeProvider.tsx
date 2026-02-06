import React, { useEffect } from "react"
import { createContext, useMemo, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { getTheme } from "./theme";

type Mode = "light" | "dark";

type ColorModeContextType = {
  toggleColorMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => { /* empty */ },
});

// ---------- helper ----------
const getInitialMode = (): Mode => {
  const saved = localStorage.getItem("themeMode");

  if (saved === "light" || saved === "dark") {
    return saved;
  }

  // fallback → системная тема
  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  return prefersDark ? "dark" : "light";
};


export const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {

  const [mode, setMode] = useState<Mode>(getInitialMode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      }
    }),
    []
  );


  useEffect(
    () =>  {
      localStorage.setItem("themeMode", mode);
      }, [mode])


  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};
