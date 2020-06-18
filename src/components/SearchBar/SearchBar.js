import React from "react"
import './SearchBar.css'
export default function SearchBar() {
    const searchMovies = async (e) => {
        e.preventDefault()
        const query = "Star wars"
        const key = "b444e3ae3bf4d7d4ac920d8aa2375c0c"
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`;
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Search a movie! </label>
            <input className="input" name="query"
                type="text" placeholder="Once upon a time in Hollywood 1966..."></input>
            <button className="button" type="submit">Search Movie!</button>
        </form>
    )
}

//to create the SearchMovies component
//form with a class of form
//label with htmlFor="query" and a class of Label
//input of type text with a name of "query" and a placeholder
//button class of button and a type of submit