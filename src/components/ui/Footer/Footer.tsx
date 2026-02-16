import { Box, Divider } from "@mui/material"

export const Footer = () => {
  return (
    <>
      <Divider sx={{ opacity: 0.6 }} />
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 64, bgcolor: "custom.footer" }}>
        © 2026 Kinopoisk Demo · Data courtesy of TMDB.
      </Box>

    </>
  )
}