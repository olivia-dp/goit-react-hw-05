import { Formik, Form, Field } from 'formik';
import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
 const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

   useEffect(() => {
    if (query) {
      getData(query);
    }
  }, [query]);
  
  const handleChangeQuery = (newQuery) => {
   
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
    setMovies([]);
    getData(newQuery); 
  };


const getData = async (newQuery) => {
    try {
      const data = await fetchSearchMovie({ query: newQuery});
      
      setMovies((prev) => ([...prev, ...data]));
    } catch (error) {
      console.log(error);
    } 
  };

 

 const onSubmit = values => {
    console.log(values);
    handleChangeQuery(values.query);
  };

  const initialValues = {
    query,
  };

  return (
    <div>MoviesPage
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name='query' />
          <button type='submit'>Search</button>
        </Form>
      </Formik>
      <MovieList movies={ movies} />
    </div>
  );
};


export default MoviesPage

