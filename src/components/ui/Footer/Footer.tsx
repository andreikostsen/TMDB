import { Box, Divider } from "@mui/material"

export const Footer = () => {
  return (
    <Box>
      <Divider sx={{ opacity: 0.6 }} />
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 64, backgroundColor: "custom.footer" }}>
        © 2026 Kinopoisk Demo · Data courtesy of TMDB.
      </Box>

    </Box>
  )
}