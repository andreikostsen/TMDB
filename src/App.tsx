
import { MainLayout } from "./layouts/MainLayout"
import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./pages"
import { PopularMovies } from "./pages/PopularMovies.tsx"
import { MoviesLayout } from "./layouts/MoviesLayout/MoviesLayout.tsx"
import { TopRatedMovies } from "./pages/TopRatedMovies.tsx"
import { UpcomingMovies } from "./pages/UpcomingMovies.tsx"
import { NowPlayingMovies } from "./pages/NowPlayingMovies.tsx"

const Page = ({ title }: { title: string }) => (
  <div style={{ padding: 24 }}>
    <h1>{title}</h1>
  </div>
);

export const App = () => {


return  (
      <Routes>


        <Route element={<MainLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/filtered-movies" element={<Page title="Filtered Movies" />} />
          <Route path="/search" element={<Page title="Search" />} />
          <Route path="/favorites" element={<Page title="Favorites" />} />
        </Route>

        <Route path={"/movies"} element={<MoviesLayout /> } >
          <Route index element={<Navigate to="popular" replace />} />
          <Route path="popular" element={<PopularMovies />} />
          <Route path="top" element={<TopRatedMovies />} />
          <Route path="upcoming" element={<UpcomingMovies />} />
          <Route path="now" element={<NowPlayingMovies />} />
        </Route>


        <Route path="*" element={<Page title="Not Found" />} />


      </Routes>
  )
}
