import React from 'react'

import './MovieCard.css'
export default function MovieCard(props) {

    return (
        <div className="card" key={props.obj.id}>
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.obj.poster_path}`}
                alt={props.title + " poster"}></img>

            <div className="card--content">
                <h3 className="card--title">{props.obj.title}</h3>
                <p><small>RELEASE DATE: {props.obj.release_date} </small></p>
                <p><small>RATING: {props.obj.vote_average} </small></p>
                <p className="card--desc">{props.obj.overview}</p>
            </div>
        </div>
    )

}