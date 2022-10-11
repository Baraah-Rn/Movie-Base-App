import React from 'react'
import { Link } from "react-router-dom";


const MoviesList = ({movies}) => {
  return (
     <div id='card-container'>
       {movies.Search.map((movie) =>
         <div className="card" key={movie.imdbID}>
          <Link to={`/movie/${movie.imdbID}`}>
           <img className="card-img-top card-img" src={movie.Poster} alt={movie.Title} />
           <div className="card-body">
             <p className="card-text">{movie.Title}</p>
           </div>
           </Link>
         </div>
        )} 
   
    </div>
  )
}

export default MoviesList