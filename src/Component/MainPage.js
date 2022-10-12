
import React, {useState } from 'react';
import useFetch from '../Hooks/useFetch';
import MoviesList from './MoviesComponents/MoviesList';
import Header from './NavBar';
import SearchBox from './SearchBox';
import TitlePage from  "./TitlePage"

const MainPage = () => { 
  const [searchValue, setSearchValue] = useState('')

  let baseUrl = `http://www.omdbapi.com/?s=life&apikey=351c64c2`

  if (searchValue){
      baseUrl = `http://www.omdbapi.com/?s=${searchValue}&type=${"movie"}&apikey=351c64c2`
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
        <Header/>
        </div>
        <SearchBox handleSubmit={handleSubmit}  searchValue={searchValue} setSearchValue={setSearchValue}/>
      
      <div>
        <TitlePage title= {"Picked for you" } />
        { movies.Search && <MoviesList movies={movies}  />}
      </div>
      

    </div>
  )
}

export default MainPage