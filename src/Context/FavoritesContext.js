
import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const deleteFav = (id) => {
    setFavorites(favorites.filter((movie) => movie.imdbID !== id));
  };
  const addFav = (movie) => {
    setFavorites([...favorites, movie]);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, deleteFav, addFav }}>
      {children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesProvider