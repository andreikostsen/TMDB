import { Box, Button, Container } from "@mui/material"
import { NavLink, Outlet } from "react-router-dom"
import { Header } from "../../components/ui/Header"
import { Footer } from "../../components/ui/Footer"
import { forwardRef, useEffect, useState } from "react"

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


const useScrollDirection = () => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY) {
        setShow(true) // вверх
      } else {
        setShow(false) // вниз
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => { window.removeEventListener("scroll", handleScroll); }
  }, [])

  return show
}


export const MoviesLayout = () => {

  const show = useScrollDirection()

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1100,
          transform: show ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease",
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0,0,0,0.7)",
          boxShadow: show ? 3 : 0
        }}
      >
        <Header />
      </Box>

      <Container maxWidth={false} sx={{ maxWidth: 1320, pt: "80px"}}>
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
    </>


  )
}
