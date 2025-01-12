import { Formik, Form, Field } from 'formik';
import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import s from "./MoviesPage.module.css"


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
 const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

 useEffect(() => {
    const getData = async (newQuery) => {
     
        const data = await fetchSearchMovie({ query: newQuery });
        setMovies(data); 
    };

    if (query) {
      getData(query);
    }
  }, [query]);


  const handleChangeQuery = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

 
  const onSubmit = (values) => {
    handleChangeQuery(values.query);
  };

  const initialValues = {
    query,
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name='query' className={s.input} />
          <button type='submit' className={s.searchBtn}>Search</button>
        </Form>
      </Formik>
      <MovieList movies={ movies} />
    </div>
  );
};


export default MoviesPage

