import React from 'react';

import classes from './MoviesList.module.css';

const MoviesList = (props) => {
    return (
        props.movies.map(movie =>
            <div id={movie.id} className={classes.clear}>
                <img
                    alt=""
                    className={classes.tile}
                    src={"http://image.tmdb.org/t/p/original/" + movie.backdrop_path}/>
                <div className={classes.info}>
                    <h3>{movie.title}</h3>
                    <p>Score: {movie.vote_average} / 10</p>
                    <details>
                        <summary>Overview</summary>
                        {movie.overview}
                    </details>
                </div>
            </div>
        )
    )
}

export default MoviesList;
