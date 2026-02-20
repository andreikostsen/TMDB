import {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery,
  useGetWelcomePosterQuery
} from "../services/tmdbApi.ts"
import { LinearProgress, Box } from "@mui/material"
import { MovieSection } from "../components/ui/MovieSection"

export const Home = () => {
  const { data, isLoading } = useGetWelcomePosterQuery()

  const popular =useGetPopularMoviesQuery()
  const topRated = useGetTopRatedMoviesQuery();
  const upcoming = useGetUpcomingMoviesQuery();
  const nowPlaying = useGetNowPlayingMoviesQuery();

  if (isLoading || !data?.backdrop_path) return <LinearProgress />

  const imageUrl = `https://image.tmdb.org/t/p/original${data.backdrop_path}`

  return (
    <Box>

    <Box
      sx={{
        width: "100%",
        height: "80vh",
        backgroundImage: `
      linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.6)),
      url(${imageUrl})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    </Box>
        <MovieSection movies={popular.data?.results ?? []} sectionTitle={"Popular Movies"} isLoading={popular.isLoading} link={"movies/popular"} />
        <MovieSection movies={topRated.data?.results ?? []} sectionTitle={"Top Movies"} isLoading={topRated.isLoading} link={"movies/top"} />
        <MovieSection movies={upcoming.data?.results ?? []} sectionTitle={"Upcoming Movies"} isLoading={upcoming.isLoading} link={"movies/upcoming"} />
        <MovieSection movies={nowPlaying.data?.results ?? []} sectionTitle={"Now Playing Movies"} isLoading={nowPlaying.isLoading} link={"movies/now"} />

    </Box>
  )
}
