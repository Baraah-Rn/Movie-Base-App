import React from 'react'
import { Link } from "react-router-dom";
import FavoritesIcon from '../FavoritesComponents/FavoritesIcon';


const MovieCard = ({ movie }) => {
  return (
  
    <div>
      <img className="card-img-top card-img" src={movie.Poster} alt={movie.Title} />
      <div className="card-body">
        <Link to={`/movie/${movie.imdbID}`} className="link">
          <h5 className="card-text">{movie.Title}</h5>
        </Link>
        <FavoritesIcon movie={movie} />
      </div>
    </div>
  )
}

export default MovieCard