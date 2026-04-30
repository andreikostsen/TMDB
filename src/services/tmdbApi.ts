import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Movie, MovieResponse } from "./movie.types.ts"

const API_READ_ACCESS_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

export type Category = "popular" | "top_rated" | "upcoming" | "now_playing"


export const tmdbApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: headers => {
      headers.set("authorization", `Bearer ${API_READ_ACCESS_TOKEN}`)
      return headers
    },
  }),
  endpoints: build => ({
    getWelcomePoster: build.query<Movie, null>({
      query: () => `movie/popular`,

      transformResponse: (res: MovieResponse) => {
        const validMovie = res.results.filter(m => m.backdrop_path)
        return validMovie[Math.floor(Math.random() * validMovie.length)]
      },
    }),

    getMoviesByCategory: build.query<MovieResponse,
      { category: Category, page?: number }>({
      query: ({category, page = 1}) => ({
        url: `movie/${category}`,
        params: {
          page,
        }
      }),
    }),
  }),
  reducerPath: "tmdbApi",
  tagTypes: ["Welcome", "Popular"],
})

export const {useGetWelcomePosterQuery, useGetMoviesByCategoryQuery} = tmdbApi