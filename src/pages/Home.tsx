import type {
  Category} from "../services/tmdbApi.ts";
import {
  useGetMoviesByCategoryQuery,
  useGetWelcomePosterQuery
} from "../services/tmdbApi.ts"
import { LinearProgress, Box } from "@mui/material"
import { MovieSection } from "../components/ui/MovieSection"


export const Home = () => {
  const { data, isLoading } = useGetWelcomePosterQuery(null)

 const queries = {
   popular: useGetMoviesByCategoryQuery({category: "popular"}),
   top_rated: useGetMoviesByCategoryQuery({category: "top_rated"}),
   upcoming: useGetMoviesByCategoryQuery({category: "upcoming"}),
   now_playing: useGetMoviesByCategoryQuery({category: "now_playing"}),
 }

  const mainPageSections: {sectionTitle: string, category: Category}[] = [
    {sectionTitle: "Popular Movies", category: "popular"},
    {sectionTitle: "Top Rated Movies", category: "top_rated"},
    {sectionTitle: "Upcoming Movies", category: "upcoming"},
    {sectionTitle: "Now Playing Movies", category: "now_playing"},
  ]


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

      {mainPageSections.map(({sectionTitle, category}) => {
         const current = queries[category]
          return (
            <MovieSection movies={current.data?.results ?? []} sectionTitle={sectionTitle} isLoading={current.isLoading} link={`movies/${category}`} key={category}/>
          )
        }
      )
      }
    </Box>
  )
}
