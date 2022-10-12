import React, { useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import MoviesList from './MoviesList';
import NavBar from '../NavBar';
import SearchBox from '../SearchBox';

const MainPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const [typeValue, setTypeValue] = useState("All")
  const [year, setYear] = useState('')


  let baseUrl = `http://www.omdbapi.com/?s=life&apikey=351c64c2`
  if (searchValue && typeValue !== "All" && year !== null) {
    baseUrl = `http://www.omdbapi.com/?s=${searchValue}&type=${typeValue}&y=${year.slice(7, 11)}&apikey=351c64c2`
  } else if (searchValue && typeValue !== "All") {
    baseUrl = `http://www.omdbapi.com/?s=${searchValue}&type=${typeValue}&apikey=351c64c2`
  } else if (searchValue && year !== null) {
    baseUrl = `http://www.omdbapi.com/?s=${searchValue}&y=${year.slice(7, 11)}&apikey=351c64c2`
  }

  const { data: movies, error } = useFetch(baseUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      {error && <div>{error}</div>}
      <div className='row'>
        <NavBar title={"Hello"} />
      </div>
      <SearchBox handleSubmit={handleSubmit}
        searchValue={searchValue} setSearchValue={setSearchValue}
        typeValue={typeValue} setTypeValue={setTypeValue}
        year={year} setYear={setYear} />

      <div>
        {movies.Search && <MoviesList movies={movies} />}
      </div>


    </div>
  )
}

export default MainPage