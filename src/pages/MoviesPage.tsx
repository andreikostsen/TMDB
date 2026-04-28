import { Box, Pagination, Typography } from "@mui/material"
import { useGetMoviesByCategoryQuery } from "../services/tmdbApi.ts"
import { MovieSmall } from "../components/ui/Movie"
import type { Movie } from "../services/movie.types.ts"
import { useParams, useSearchParams } from "react-router-dom"


export const MoviesPage = () => {

  type Category = "popular" | "top_rated" | "upcoming" | "now_playing"

  const [searchParams, setSearchParams] = useSearchParams()
  const { category = "popular" } = useParams()

  const page = Number(searchParams.get('page')) || 1

  const current = useGetMoviesByCategoryQuery({category, page})


  const onChangeHandler = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setSearchParams({page: String(value)})
  }

  const titles = {
    popular: "Popular Movies",
    top_rated: "Top Rated Movies",
    upcoming: "Upcoming Movies",
    now_playing: "Now Playing Movies",
  }

  const safeCategory: Category = category in titles ? category as Category : "popular"

  return (
    <Box>
      <Typography variant={"h2"}>{titles[safeCategory]}</Typography>
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
        {current.data?.results.map((item: Movie) => (
          <Box key={item.id}>
            <MovieSmall  movie={item} />
          </Box>
        ))}

      </Box>
      <Box sx={{display: "flex", justifyContent: "center", my: 6}}>
        <Pagination count={10} color="primary" page={page} onChange={onChangeHandler} />
      </Box>
    </Box>
  )
}