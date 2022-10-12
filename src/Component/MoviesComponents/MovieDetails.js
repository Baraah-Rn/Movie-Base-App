import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import useFetch from '../../Hooks/useFetch';
import FavoritesIcon from '../FavoritesComponents/FavoritesIcon';
import Header from '../NavBar';
const MovieDetails = () => {
    const { id } = useParams();

    const detailUrl = `http://www.omdbapi.com/?i=${id}&apikey=351c64c2`
    const { data: movie, isLoading, error } = useFetch(detailUrl);


    return (
        <>
            {isLoading && <div> Loading...</div>}
            {error && <div>{error}</div>}
            <Header/>
            {movie && <div className="card mb-3">

                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={movie.Poster} className="img-fluid rounded-start det-img" alt={movie.Title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{movie.Title}({movie.Year})</h5>

                            
                            <FavoritesIcon movie={movie}/>



                            <p className="card-text"><small className="text-muted">{movie.Genre}</small></p>
                            <p className="card-text">{movie.Plot}</p>
                            <p className="card-text"><small className="text-muted">Released at : {movie.Released}, Runtime: {movie.Runtime}</small></p>

                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            More about the Movie
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <h5>Awards</h5>
                                            <p className="card-title">{movie.Awards}</p>


                                            <hr />
                                            <strong>Language: {movie.Language}</strong><br />
                                            <strong> Countries: {movie.Country}</strong><hr />
                                            <p>Director: {movie.Director}</p>
                                            <p>Writer: {movie.Writer}</p>
                                            <p>Actors: {movie.Actors}</p>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
            }
        </>
    )
}

export default MovieDetails

