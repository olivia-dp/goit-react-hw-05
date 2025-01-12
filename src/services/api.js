import axios from "axios";

const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDYyY2MxNDdhOGQwNTNhZTRiZjA1MjZhOWE0NTBkYiIsIm5iZiI6MTczNjE1ODA1My4wNzksInN1YiI6IjY3N2JhYjY1NGJmMGYwZTNiNDc0YzkyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yzsxRGHe-8zmFx03HdM2lPALk8O0epAm_EW6z0d9wII'
  }
};

export const fetchTrendingMovies = async () => {
    const {data} = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US`, options
    );    
  return data.results;
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  return data;
};

export const fetchCastMovie = async id => {
const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options);

  
  return data.cast;
}

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options);
  
  return data.results;
}

export const fetchSearchMovie = async ({ query }) => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);

  
  return data.results;
}