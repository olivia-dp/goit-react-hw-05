import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';


export const fetchImages = async ({ query, page }) => {
    const {data} = await axios.get(
    `${BASE_URL}`,
    {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDYyY2MxNDdhOGQwNTNhZTRiZjA1MjZhOWE0NTBkYiIsIm5iZiI6MTczNjE1ODA1My4wNzksInN1YiI6IjY3N2JhYjY1NGJmMGYwZTNiNDc0YzkyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yzsxRGHe-8zmFx03HdM2lPALk8O0epAm_EW6z0d9wII'
          },
        params: {
           query, 
      page,  
      per_page: 12,
      },
    }
    );
    console.log(data.results);
    
  return data.results;
};