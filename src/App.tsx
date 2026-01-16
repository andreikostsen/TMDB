import "./App.css"
import { useEffect } from "react"


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmQ4Y2MyMmMzMjA0OTEwNGZhN2E4YWYyZDc1NTA4MSIsIm5iZiI6MTc2NTk3Njk0My4yMDUsInN1YiI6IjY5NDJhYjZmY2Q4OGRiZDEwM2Q3M2E0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nxxqp1JNiNW2akpjuEUIjhkybf5enzcK7XHi7DHkmiI',
  }
};


export const App = () => {


  useEffect(() => {

    fetch('https://api.themoviedb.org/3/authentication', options)
      .then(res => res.json())
      .then((res) => {console.log(res)})
      .catch((err: unknown) => { console.error(err); });
  }, [])

return  (
    <div className="App">
      Hi
    </div>
  )
}
