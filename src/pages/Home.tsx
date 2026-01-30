import { useEffect, useState } from "react";

const API_READ_ACCESS_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
  },
};

type Movie = {
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
};

export const Home = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/343611", options)
      .then((res) => res.json())
      .then((res: Movie) => {
        console.log(res);
        setMovie(res);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  }, []);

  const posterUrl = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const backdropUrl = movie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  return (
    <div>
      <h1>Home</h1>

      {movie ? (
        <>
          <h2>{movie.title}</h2>

          {backdropUrl && (
            <img
              src={backdropUrl}
              alt={movie.title}
              style={{ width: "100%", maxWidth: 900, borderRadius: 16 }}
            />
          )}

          {posterUrl && (
            <img
              src={posterUrl}
              alt={movie.title}
              style={{ width: 260, borderRadius: 16, marginTop: 16 }}
            />
          )}

          <p style={{ maxWidth: 900 }}>{movie.overview}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
