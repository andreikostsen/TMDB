import { useGetPopularMoviesQuery, useGetWelcomePosterQuery } from "../services/tmdbApi.ts"
import { LinearProgress, Box } from "@mui/material"
import { MovieSmall } from "../components/ui/Movie/MovieSmall.tsx"
import { Movie } from "../services/movie.types.ts"

export const Home = () => {
  const { data, isLoading } = useGetWelcomePosterQuery()

  const { currentData } =useGetPopularMoviesQuery()

   console.log(currentData?.results.slice(0, 5))
  // console.log(currentData)

  if (isLoading) return <LinearProgress />

  const imageUrl = `https://image.tmdb.org/t/p/original${data?.backdrop_path}`

  return (
    <>
    <Box
      sx={{
        width: "100%",
        height: "80vh",
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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(6, 1fr)",
          },
          gap: 2,
          p: 3,
          maxWidth: 1320,
          mx: "auto",
        }}
      >
                {currentData?.results.slice(0, 6).map((item: Movie) => (
                  <Box>
                    <MovieSmall key={item.id} movie={item} />
                  </Box>
                ))}

      </Box>


    </>
  )
}
