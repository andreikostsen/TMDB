import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Movie, MovieResponse } from "./movie.types.ts"

const API_READ_ACCESS_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

export const tmdbApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: headers => {
      headers.set("authorization", `Bearer ${API_READ_ACCESS_TOKEN}`)
      return headers
    },
  }),
  endpoints: build => ({
    getWelcomePoster: build.query<Movie, void>({
      query: ()=> `movie/popular`,

      transformResponse: (res: MovieResponse) => {
        const validMovie = res.results.filter(m=>m.backdrop_path)
        return validMovie[Math.floor(Math.random()*validMovie.length)]
      }
    }),
  }),
  reducerPath: "tmdbApi",
  tagTypes: ["Welcome"],
})

export const {useGetWelcomePosterQuery} = tmdbApi