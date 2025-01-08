import MovieCard from "../MovieCard/MovieCard";
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
    return (
        <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
              <MovieCard title={movie.original_title} img={movie.poster_path}
/></Link>
        </li>
      ))}
      
    </ul>
      );
};

export default MovieList;