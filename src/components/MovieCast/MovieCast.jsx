import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCastMovie } from '../../services/api'

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const cast = await fetchCastMovie(movieId);
      setCast(cast);
    };
    getData();
  }, [movieId])


   const baseURL = 'https://image.tmdb.org/t/p/'


  return (
    <div>
      <section>
        Cast
        <ul>
          {cast.map(item => (
            <li key={item.id}>
              {item.popularity > 30 ?
                <div>
                  <img src={`${baseURL}w200${item.profile_path}`}/>
                  <p>{item.name}</p>
                  <p>{item.character}</p>
                  
                </div>
                : ""}
              
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default MovieCast