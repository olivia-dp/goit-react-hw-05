import { Route, Routes } from 'react-router-dom';
import HomePage from "../src/pages/HomePage/HomePage"
import MoviesPage from "../src/pages/MoviesPage/MoviesPage"
import MovieDetailsPage from "../src/pages/MovieDetailsPage/MovieDetailsPage"
import MovieCast from "../src/components/MovieCast/MovieCast"
import MovieReviews from "../src/components/MovieReviews/MovieReviews"
import NotFoundPage from "../src/pages/NotFoundPage/NotFoundPage"
import Navigation from './components/Navigation/Navigation';



const App = () => {
  return (
    <div>
  <Navigation />
  <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
  
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </div>
  )
}

export default App;
  