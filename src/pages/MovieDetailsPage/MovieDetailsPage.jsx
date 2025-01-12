import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from '../../services/api';
import s from '../MovieDetailsPage/MovieDetailsPage.module.css'

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
    <>
    <NavLink to={goBackRef.current} className={s.link}>Go back</NavLink>
    <div className={s.container}>
      <div className={s.imgBox}>
        <h2 className={s.title}>{movie.title}</h2>
      <img src={`${baseURL}w300${movie.poster_path}`} />
      </div>
      <div className={s.infoBox}><p>Score: {movie.vote_average}</p>
      <p>Release date: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>    
        </div> 
      </div>
      <div>
         <nav className={s.nav}>Additional information
        <ul>
          <li>
            <Link to='cast' className={s.link}>Cast</Link>
          </li>
          <li>
            <Link to='reviews' className={s.link}>Reviews</Link>
          </li>
        </ul>
      </nav>
        
      </div>
      <Outlet />
      
      </>
  )
}

export default MovieDetailsPage