import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from '../../services/api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const goBackRef = useRef(location.state ?? '/movies');

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const movie = await fetchMovieById(movieId);
      setMovie(movie);
      setIsLoading(false);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }
const baseURL = 'https://image.tmdb.org/t/p/'

  return (
    <div>MovieDetailsPage
      <Link to={goBackRef.current}>Go back</Link>
      <h3>{movie.title}</h3>
      <img src={`${baseURL}w500${movie.poster_path}`} />
      <p>Score: {movie.vote_average}</p>
      <p>Release date: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>
      <div>
         <nav>
        <ul>
          <li>
            <Link to='cast'>Cast</Link>
          </li>
          <li>
            <Link to='reviews'>Reviews</Link>
          </li>
        </ul>
      </nav>
        <Outlet />
      </div>
      </div>
  )
}

export default MovieDetailsPage