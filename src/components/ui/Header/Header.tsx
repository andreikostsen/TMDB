import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  useTheme, Container
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useContext, useState } from "react";

import { NAV_ITEMS } from "../../../config/navigation";
import { ColorModeContext } from "../../../features/theme/AppThemeProvider.tsx";
import { MobileMenu } from "../Menu/MobileMenu.tsx";
import logo from "./blue_long.svg";

export const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth={false} sx={{ maxWidth: 1320, bgcolor: "custom.header" }}>
          <Toolbar sx={{ minHeight: 64, px: { xs: 0, md: 1 } }}>
            {/* LEFT: logo + burger */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={() => {
                  setOpen(true)
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={logo}
                  alt="TMDB logo"
                  width={250}
                />
              </NavLink>
            </Box>


            {/* SPACER (важно!) */}
            <Box sx={{ flex: 1 }} />

            {/* CENTER: menu */}
            <Box
              sx={{
                flex: 2,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: 1,
              }}
            >
              {NAV_ITEMS.map((item) => (
                <Button key={item.to} component={NavLink} to={item.to}
                sx={{
                  whiteSpace: "nowrap",
                  "&.active": {
                  backgroundColor: "rgba(1,180,228,0.10)"
                }
                }}>
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* SPACER (чтобы справа было строго справа) */}
            <Box sx={{ flex: 1 }} />

            {/* Theme toggle */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === "dark" ? (
                  <LightModeIcon />
                ) : (
                  <DarkModeIcon />
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <MobileMenu
        open={open}
        onClose={() => {
          setOpen(false)
        }}
      />
    </>
  )
};
