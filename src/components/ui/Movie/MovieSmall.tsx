import { Box } from "@mui/material"
import { Movie } from "../../../services/movie.types.ts"

export const MovieSmall = ({ movie }: { movie: Movie }) => {

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : null;

  return (
    <Box
      sx={{
        cursor: "pointer",
        transition: "transform .2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      {imageUrl && (
        <Box
          component="img"
          src={imageUrl}
          sx={{
            width: "100%",
            borderRadius: 2,
          }}
        />
      )}

      <Box sx={{ mt: 1, fontSize: 14 }}>
        {movie.title}
      </Box>
    </Box>
  );
}