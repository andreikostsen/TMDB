
import { MainLayout } from "./layouts/MainLayout"
import { Home } from "./pages"

// const API_READ_ACCESS_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN
//
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
//   }
// };


export const App = () => {
  //
  // console.log(import.meta.env)
  // console.log(import.meta.env.VITE_API_READ_ACCESS_TOKEN)
  //
  // useEffect(() => {
  //
  //   fetch('https://api.themoviedb.org/3/authentication', options)
  //     .then(res => res.json())
  //     .then((res) => {console.log(res)})
  //     .catch((err: unknown) => { console.error(err); });
  // }, [])

return  (
      <MainLayout>
        <Home />
      </MainLayout>
  )
}
