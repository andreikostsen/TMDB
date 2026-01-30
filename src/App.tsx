
import { MainLayout } from "./layouts/MainLayout"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages"

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
          <Route path="/movies/category" element={<Page title="Movies Category" />} />
          <Route path="/filtered-movies" element={<Page title="Filtered Movies" />} />
          <Route path="/search" element={<Page title="Search" />} />
          <Route path="/favorites" element={<Page title="Favorites" />} />
        </Route>

        <Route path="*" element={<Page title="Not Found" />} />

      </Routes>
  )
}
