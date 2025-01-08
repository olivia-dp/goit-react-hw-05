import React from 'react'

const MovieCard = ({ title, img }) => {
  const baseURL = 'https://image.tmdb.org/t/p/'
  const imageUrl = `${baseURL}w500${img}`;
  return (
    <>
      <div>{title}</div>
      <img src={imageUrl} />
    </>
    
  )
}

export default MovieCard