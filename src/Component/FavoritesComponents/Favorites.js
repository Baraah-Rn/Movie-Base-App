import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../Context/FavoritesContext";
import Header from "../Header";
import MovieCard from "../MoviesComponents/MovieCard";



const FavoriteProducts = () => {
  const { favorites } = useContext(FavoritesContext);
  return (

    <div >
      <h1>Favorites</h1>
      <div className="card">
        <ul className="fav-list">
          <li className="fav-items">
            {console.log(favorites)}
            {favorites.length > 0 ? (
              favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))
            ) : (
              <h1>you don't have any favorites yet </h1>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FavoriteProducts