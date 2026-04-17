import { Box, Pagination, Typography } from "@mui/material"
import { useGetPopularMoviesQuery } from "../services/tmdbApi.ts"
import { MovieSmall } from "../components/ui/Movie"
import type { Movie } from "../services/movie.types.ts"
import { useParams, useSearchParams } from "react-router-dom"

export const MoviesPage = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const { category } = useParams()

  console.log(category)

  const page = Number(searchParams.get('page')) || 1

  const popularMovies = useGetPopularMoviesQuery(String(page))

  const onChangeHandler = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setSearchParams({page: String(value)})
  }

  return (
    <Box>
      <Typography variant={"h2"}>Popular Movies</Typography>
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
        {popularMovies.data?.results.map((item: Movie) => (
          <Box key={item.id}>
            <MovieSmall  movie={item} />
          </Box>
        ))}

      </Box>
      <Box sx={{display: "flex", justifyContent: "center", my: 6}}>
        <Pagination count={10} color="primary"  page={page} onChange={onChangeHandler} />
      </Box>
    </Box>
  )
}