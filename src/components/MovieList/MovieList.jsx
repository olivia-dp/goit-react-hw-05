import MovieCard from "../MovieCard/MovieCard";
import { Link, useLocation } from 'react-router-dom';
import s from "./MovieList.module.css"

const MovieList = ({ movies }) => {
  const location = useLocation();
    return (
        <ul className={s.list}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location} className={s.link}>
              <MovieCard title={movie.original_title} img={movie.poster_path}
/></Link>
        </li>
      ))}
      
    </ul>
      );
};

export default MovieList;