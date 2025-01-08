import { Route, Routes } from 'react-router-dom';
import HomePage from "../src/pages/HomePage"
import MoviesPage from "../src/pages/MoviesPage"
import MovieDetailsPage from "../src/pages/MovieDetailsPage"
import MovieCast from "../src/components/MovieCast/MovieCast"
import MovieReviews from "../src/components/MovieReviews/MovieReviews"
import NotFoundPage from "../src/pages/NotFoundPage"



const App = () => {
  return (
  <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
  
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App;
  