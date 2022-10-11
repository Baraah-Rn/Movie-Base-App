import React, { useContext } from "react";
import { FavoritesContext } from "../Context/FavoritesContext";
import MovieDetails from "./MovieDetails";
import Header from "./Header";



export default function FavoriteProducts() {
    const { favoriteMovies } = useContext(FavoritesContext);
  
    return (
      <>
        <Header title ="Favorites Movies "/>
        <div className="favorite-movies">
          {favoriteMovies.length > 0 ? (
            favoriteMovies.map((movie) => (
              <MovieDetails movie={movie}  />
            ))
          ) : (
            <h2>You haven't chosen any favorites yet!</h2>
          )}
        </div>
      </>
    );
  }