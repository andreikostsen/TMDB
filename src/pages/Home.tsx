import { useGetWelcomePosterQuery } from "../services/tmdbApi.ts"


export const Home = () => {


  const { data, isLoading } = useGetWelcomePosterQuery( )




  return (
    <div>
      <h1>Home</h1>
      {isLoading ? <p>Loading...</p> :
        <img src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} alt=''
             style={{ width: "100%", maxWidth: 900, borderRadius: 16 }} />
      }


    </div>
  );
};
