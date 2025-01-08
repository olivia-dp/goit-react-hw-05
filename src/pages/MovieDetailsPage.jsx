import React from 'react'
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
const imageUrl = `${baseURL}w500${movie.poster_path}`;

  return (
    <div>MovieDetailsPage
      <h3>{movie.title}</h3>
      <img src={imageUrl} />
      <p>Score: {movie.vote_average}</p>
      <p>Release date: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>
      <div>
        <Outlet />
      </div>
      </div>
  )
}

export default MovieDetailsPage