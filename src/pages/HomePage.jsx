import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/api"
import MovieList from "../components/MovieList/MovieList"
const HomePage = () => {

const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
        const data = await fetchTrendingMovies();
        setMovies(data)
    };
    getData();
  }, []);
  return (
      <>
      <div>HomePage</div>
          <MovieList movies={movies} />
    </>
  )
}

export default HomePage

