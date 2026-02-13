import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Movie, MovieResponse } from "./movie.types.ts"

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
    getPopularMovies: build.query<MovieResponse, void>({
      providesTags: ['Popular'],
      query: ()=> `movie/popular`,
    }),
    getTopRatedMovies: build.query<MovieResponse, void>({
      query: () => "movie/top_rated",
    }),

    getUpcomingMovies: build.query<MovieResponse, void>({
      query: () => "movie/upcoming",
    }),

    getNowPlayingMovies: build.query<MovieResponse, void>({
      query: () => "movie/now_playing",
    }),
  }),
  reducerPath: "tmdbApi",
  tagTypes: ["Welcome", "Popular"],
})

export const {useGetWelcomePosterQuery, useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery , useGetNowPlayingMoviesQuery} = tmdbApi