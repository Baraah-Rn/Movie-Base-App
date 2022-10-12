import React, { useContext } from 'react'
import { FavoritesContext } from "../../Context/FavoritesContext";
import heartRegular from "../../Assets/heart-regular.svg";
import heartSolid from "../../Assets/heart-solid.svg";

const FavoritesIcon = ({ movie }) => {
  const { favorites, deleteFav, addFav } = useContext(FavoritesContext);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((movie) => movie.imdbID === id);

    return boolean
  };
  return (
    <div className="heart-icon">
      {favoritesChecker(movie.imdbID) ? (
        <img
          src={heartSolid}
          alt="heart"
          onClick={() => {
            deleteFav(movie.imdbID);
          }}
        />
      ) : (
        <img
          src={heartRegular}
          alt="heart"
          onClick={() => {
            addFav(movie);
          }}
        />
      )}
    </div>
  );
};

export default FavoritesIcon;

