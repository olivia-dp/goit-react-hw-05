import { Route, Routes } from 'react-router-dom';
import MovieCast from "../src/components/MovieCast/MovieCast"
import MovieReviews from "../src/components/MovieReviews/MovieReviews"
import NotFoundPage from "../src/pages/NotFoundPage/NotFoundPage"
import Navigation from './components/Navigation/Navigation';
import { lazy, Suspense } from "react";


const HomePage = lazy(() => import('../src/pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../src/pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../src/pages/MovieDetailsPage/MovieDetailsPage'));




const App = () => {
  return (
    <div>
  <Navigation />
  <Suspense fallback={<div>Loading page...</div>}>
  <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
  
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </Suspense>
      </div>
  )
}

export default App;
  