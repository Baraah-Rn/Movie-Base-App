import React, { useContext } from "react";
import { FavoritesContext } from "../../Context/FavoritesContext";
import Header from "../NavBar";
import MovieCard from "../MoviesComponents/MovieCard";
import TitlePage from "../TitlePage";



const FavoriteProducts = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div>
      <Header />
      <TitlePage title={"My Favorites page"} />
      <div className='card-container'>
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div className="card">
              <MovieCard movie={movie} key={movie.imdbID} />
            </div>
          ))
        ) : (
          <h1>you don't have any favorites yet </h1>
        )}

      </div>
    </div>

  );
};

export default FavoriteProducts