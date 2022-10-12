import React, { useContext } from "react";
import { FavoritesContext } from "../../Context/FavoritesContext";
import NavBar from "../NavBar";
import MovieCard from "../MoviesComponents/MovieCard";



const FavoriteProducts = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div>
      <NavBar title={"My Favorites page"} />

      <div className='card-container'>
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div className="card">
              <MovieCard movie={movie} key={movie.imdbID} />
            </div>
          ))
        ) : (
          <h1 className="non-fav">You don't have any favorites yet.. </h1>
        )}

      </div>
    </div>

  );
};

export default FavoriteProducts