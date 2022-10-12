import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './UserComponents/Form'
import MainPage from "./MainPage"
import MovieDetails from '../Component/MoviesComponents/MovieDetails'
import Favorites from "../Component/FavoritesComponents/Favorites"

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/movie/:id" element={<MovieDetails/>}/>
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Home