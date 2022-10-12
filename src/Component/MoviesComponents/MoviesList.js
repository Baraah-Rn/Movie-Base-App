import React from 'react'
import MovieCard from './MovieCard';


const MoviesList = ({movies}) => {
  return (
     <div id='card-container'>
       {movies.Search.map((movie) =>
         <div className="card"key={movie.imdbID}>
          <MovieCard movie={movie} />
         </div>
        )} 
   
    </div>
  )
}

export default MoviesList