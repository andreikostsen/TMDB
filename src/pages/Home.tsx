import { useGetWelcomePosterQuery } from "../services/tmdbApi.ts"
import { LinearProgress, Box } from "@mui/material"

export const Home = () => {
  const { data, isLoading } = useGetWelcomePosterQuery()

  if (isLoading) return <LinearProgress />

  const imageUrl = `https://image.tmdb.org/t/p/original${data?.backdrop_path}`

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `
      linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.6)),
      url(${imageUrl})
    `,
        backgroundSize: "cover",      // ключевая строка
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>Welcome!</h1>
    </Box>
  )
}
