import React from 'react'
import MovieCard from './MovieCard';


const MoviesList = ({ movies }) => {
  return (

    <div className='card-container'>
      {movies.Search.map((movie) =>
        <div key={movie.imdbID} className="card">
          <MovieCard movie={movie} />
        </div>
      )}

    </div>
  )
}

export default MoviesList