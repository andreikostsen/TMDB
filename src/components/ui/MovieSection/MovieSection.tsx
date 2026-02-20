import { Box, Button, Skeleton, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import type { Movie } from "../../../services/movie.types.ts"
import { MovieSmall } from "../Movie"


type MovieSectionPropsType = {
  movies: Movie[];
  sectionTitle: string;
  isLoading: boolean;
  link: string;
}


export const MovieSection = ({ movies, sectionTitle, isLoading, link }: MovieSectionPropsType) => {

  const skeletonItems = Array.from({ length: 6 })

  return (
    <Box sx={{ py: 4 }}>

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1320,
          mx: "auto",
          mb: 2,
          px: 2,
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          {sectionTitle}
        </Typography>

        <Button
          component={NavLink}
          to={link}
          size="small"
          sx={{
            border: "solid 1px",
          }}
        >
          View more
        </Button>
      </Box>

      {/* Grid */}

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

        { isLoading
          ?  skeletonItems.map((_, i) => (
            <Box key={i}>
              <Skeleton
                variant="rectangular"
                height={240}
                sx={{ borderRadius: 2 }}
                animation="wave"
              />
              <Skeleton width="80%" />
            </Box>
          ))
          : movies.slice(0, 6).map((item: Movie) => (
          <Box>
            <MovieSmall key={item.id} movie={item} />
          </Box>
        ))

        }
      </Box>
    </Box>
  )
}