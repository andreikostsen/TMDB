import { Box, Button, Container } from "@mui/material"
import { NavLink, Outlet } from "react-router-dom"
import { Header } from "../../components/ui/Header"
import { Footer } from "../../components/ui/Footer"
import { forwardRef } from "react"

const navButtonSx = {
  color: "text.secondary",
  fontWeight: 400,
  borderBottom: "2px solid transparent",


  "&.active": {
    color: "primary.contrastText",
    backgroundColor: "primary.main",
    fontWeight: 600,
    borderBottom: "2px solid",
    borderColor: "primary.main",
  },

  "&:hover": {
    backgroundColor: "action.hover",
  },

  "&.active:hover": {
    backgroundColor: "primary.dark",
  },
}


export const NavButton = forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof NavLink>
>((props, ref) => (
  <NavLink
    ref={ref}
    {...props}
  />
))

export const MoviesLayout = () => {
  return (
    <Box sx={{ display: "grid", gridTemplateRows: "auto 1fr ", height: "100vh" }}>
      <Header />
      <Box sx={{display: "grid", gridTemplateRows: "1fr auto"}}>
        <Container maxWidth={false} sx={{ maxWidth: 1320 }}>
          <Box
            sx={{ display: "flex", justifyContent: "center", height: 32, my: 4, gap: 2 }}
          >
              <Button component={NavButton} to={"popular"} sx={navButtonSx}>
                Popular Movies</Button>
              <Button component={NavButton} to={"top"}  sx={navButtonSx}>
                Top Rated Movies
              </Button>
              <Button component={NavButton} to={"upcoming"}  sx={navButtonSx}>
                Upcoming Movies
              </Button>
              <Button component={NavButton} to={"now"}  sx={navButtonSx}>
                Now Playing Movies
              </Button>

          </Box>

          <Outlet />
        </Container>
        <Footer />
      </Box>

    </Box>

  )
}
