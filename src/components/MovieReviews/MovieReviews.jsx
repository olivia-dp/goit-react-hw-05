import React, { useEffect, useState } from 'react'
import { fetchMovieReviews } from '../../services/api'
import { useParams } from 'react-router-dom'

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const review = await fetchMovieReviews(movieId);
      setReviews(review);
    };
    getData();
  },[movieId])


  return (
    <div>
      <section>
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <div>
                <p>{item.author}</p>
                <p>{ item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default MovieReviews