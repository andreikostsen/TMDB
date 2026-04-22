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
      query: () => `movie/popular`,

      transformResponse: (res: MovieResponse) => {
        const validMovie = res.results.filter(m => m.backdrop_path)
        return validMovie[Math.floor(Math.random() * validMovie.length)]
      },
    }),
    getPopularMovies: build.query<MovieResponse, string>({
      providesTags: ["Popular"],
      query: pageNumber => `movie/popular?page=${pageNumber}`,
    }),
    getTopRatedMovies: build.query<MovieResponse, string>({
      query: pageNumber => `movie/top_rated?page=${pageNumber}`,
    }),

    getUpcomingMovies: build.query<MovieResponse, string>({
      query: pageNumber => `movie/upcoming?page=${pageNumber}`,
    }),

    getNowPlayingMovies: build.query<MovieResponse, string>({
      query: pageNumber => `movie/now_playing?page=${pageNumber}`,
    }),

    getMoviesByCategory: build.query<MovieResponse,
      { category: string, page: number }>({
      query: ({category, page}) => ({
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

export const {useGetWelcomePosterQuery, useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery , useGetNowPlayingMoviesQuery, useGetMoviesByCategoryQuery} = tmdbApi