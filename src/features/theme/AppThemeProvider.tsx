import type React from "react";
import { createContext, useMemo, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { getTheme } from "./theme";

type ColorModeContextType = {
  toggleColorMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => { /* empty */ },
});

export const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        { setMode((prev) => (prev === "light" ? "dark" : "light")); },
    }),
    []
  );

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
