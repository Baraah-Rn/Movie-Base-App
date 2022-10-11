
import React, {useState } from 'react';
import useFetch from '../Hooks/useFetch';
import MoviesList from './MoviesList';
import Header from './Header';
import SearchBox from './SearchBox';

const MainPage = () => { 
  const [searchValue, setSearchValue] = useState('')

  let baseUrl = `http://www.omdbapi.com/?s=star wars&apikey=351c64c2`

  if (searchValue){
      baseUrl = `http://www.omdbapi.com/?s=${searchValue}&apikey=351c64c2`
  }

  const {data: movies, isLoading, error } = useFetch(baseUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
}

  return (
    <div>
      {isLoading && <div> Loading...</div>}
      {error && <div>{error}</div>}
      <div className='row'>
        <Header title="Movies" />
        <SearchBox handleSubmit={handleSubmit}  searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div>
        { movies.Search && <MoviesList movies={movies}  />}
      </div>

    </div>
  )
}

export default MainPage