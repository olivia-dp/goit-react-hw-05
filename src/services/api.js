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
    console.log(data);
    
  return data.results;
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  console.log(data);
  
  return data;
};