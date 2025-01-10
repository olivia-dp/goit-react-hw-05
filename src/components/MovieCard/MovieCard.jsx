import React from 'react'
import s from "./MovieCard.module.css"

const MovieCard = ({ title, img }) => {
  const baseURL = 'https://image.tmdb.org/t/p/'
  return (
    <>
      <img src={ `${baseURL}w300${img}`} />
      <h2 className={s.title}>{title}</h2>
    </>
    
  )
}

export default MovieCard