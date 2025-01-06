import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
    return (
        <ul>
          {images.map(image => (
            <li key={image.id}>
                  <MovieCard />
            </li>
          ))}
        </ul>
      );
};

export default MovieList;