import React, { useState } from "react"
import './SearchBar.css'
import MovieCard from "../MovieCard/MovieCard"
export default function SearchBar() {

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()
        const key = "b444e3ae3bf4d7d4ac920d8aa2375c0c"
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`;
        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Search a movie! </label>
                <input className="input" name="query"
                    type="text"
                    value={query}
                    onChange={(e) => { setQuery(e.target.value) }}
                    placeholder="i.e Star Wars"></input>
                <button className="button" type="submit">Search Movie!</button>
            </form>
            <br />
            <h4 className="disclaimer">API made by: The Movie Database!</h4>
            <br />
            <div className="movie-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard obj = {movie} />
                ))}
            </div>
        </>
    )
}