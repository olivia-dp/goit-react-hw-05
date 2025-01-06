import { useState } from 'react';
import { fetchImages } from './services/api';
// import MovieList from './components/MovieList/MovieList';

 function App() {
  const [] = useState([]);
  // const [page, setPage] = useState(1);
  // const [query, setQuery] = useState("");
  

  // const getImagesData = async (newQuery, newPage = 1) => {
  //   try {
  //     setIsLoading(true);
  //     setIsError(false);

  //     const data = await fetchImages({ query: newQuery, page: newPage });
      
  //     setImages((prev) => (newPage === 1 ? data : [...prev, ...data]));
  //   } catch (error) {
  //     setIsError(true);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const handleChangeQuery = (newQuery) => {
  //   if (newQuery === query) {
  //     toast.error("Please enter a new search query!");
  //     return;
  //   }

  //   setQuery(newQuery);
  //   setPage(1);
  //   setImages([]);
  //   getImagesData(newQuery, 1); 
  // };

  // const handleChangePage = () => {
  //   if (!isLoading) {
  //     const nextPage = page + 1;
  //     setPage(nextPage);
  //     getImagesData(query, nextPage); 
  //   }
  // };

  // return (
  //   // <>
  //   //   <MovieList />
  //   // </>
  // );
}

export default App;
  