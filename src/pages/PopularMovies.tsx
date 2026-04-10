import { Box, Pagination, Typography } from "@mui/material"
import { useGetPopularMoviesQuery } from "../services/tmdbApi.ts"
import { MovieSmall } from "../components/ui/Movie"
import type { Movie } from "../services/movie.types.ts"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export const PopularMovies = () => {

  const [searchParams, setSearchParams] = useSearchParams()




  console.log("page " + searchParams.get('page'))

  const [page, setPage] = useState<number>( Number(searchParams.get('page')) )

  useEffect(() => {
    if (searchParams.get('page') === null) {setSearchParams({page: "1"})}
    setPage(1)
  }, [])

  const popularMovies = useGetPopularMoviesQuery(String(page))

  const onChangeHandler = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    console.log("clicked page:", value)
    setPage(value)
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
          <Box key={item.id}>op
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