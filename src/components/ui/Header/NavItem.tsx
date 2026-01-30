import { NavLink } from "react-router-dom";
import { Box } from "@mui/material"

export const NavItem = ({ to, label }: { to: string; label: string }) => {
  return (
    <Box
      component={NavLink}
      to={to}
      sx={{
        position: "relative",
        padding: "6px 12px",
        textDecoration: "none",
        color: "text.primary",

        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "2px",
          backgroundColor: "primary.main",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s ease",
        },

        "&:hover::after": {
          transform: "scaleX(1)",
        },

        "&.active::after": {
          transform: "scaleX(1)",
        },

        "&.active": {
          fontWeight: 600,
        },
      }}
    >
      {label}
    </Box>
  )
}
