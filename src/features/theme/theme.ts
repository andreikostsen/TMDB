import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") => {
  const isDark = mode === "dark";

  // TMDB-like colors
  const tmdb = {
    primary: "#01B4E4", // turquoise
    secondary: "#90CEA1", // mint green

    dark: {
      bg: "#0D253F", // main background
      paper: "#0F2B46", // surfaces/cards
      paper2: "#0B1D33", // slightly darker surface
      textPrimary: "#FFFFFF",
      textSecondary: "rgba(255,255,255,0.72)",
      divider: "rgba(255,255,255,0.10)",
    },

    light: {
      bg: "#F5F7FA", // soft gray background
      paper: "#FFFFFF",
      paper2: "#EEF2F6",
      textPrimary: "#0D253F",
      textSecondary: "rgba(13,37,63,0.70)",
      divider: "rgba(13,37,63,0.12)",
    },
  };

  const c = isDark ? tmdb.dark : tmdb.light;

  return createTheme({
    palette: {
      mode,

      primary: { main: tmdb.primary },
      secondary: { main: tmdb.secondary },

      background: {
        default: c.bg,
        paper: c.paper,
      },

      text: {
        primary: c.textPrimary,
        secondary: c.textSecondary,
      },

      divider: c.divider,
      custom: {
        header: c.paper2,
        footer: c.paper2
      }

    },

    shape: {
      borderRadius: 14,
    },

    typography: {
      fontFamily: "Inter, system-ui, Arial",
      fontSize: 14,
      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: c.bg,
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? "rgba(13,37,63,0.72)" : "rgba(255,255,255,0.72)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",

            borderBottom: `1px solid ${c.divider}`,
            boxShadow: "none",
          },
        },
      },

      MuiToolbar: {
        styleOverrides: {
          root: {
            minHeight: 64,
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
    },
  });
};
