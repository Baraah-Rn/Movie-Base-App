import React from 'react'
import MovieCard from './MovieCard';


const MoviesList = ({movies}) => {
  return (
     <div className='card-container'>
       {movies.Search.map((movie) =>
         <div className="card">
          <MovieCard movie={movie} key={movie.imdbID} />
         </div>
        )} 
   
    </div>
  )
}

export default MoviesList