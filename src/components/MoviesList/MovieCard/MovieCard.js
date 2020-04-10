import React from 'react';

import classes from './MovieCard.module.css';

const MovieCard = (props) => {
    return (
        <div className="col-6">
            <div>
                <div className={classes.MovieCard}>
                    <div className={classes.Poster}>
                        <img src={props.source} alt=""/>
                    </div>
                    <div className={classes.MovieInfo}>
                        <div className={classes.Icons}>
                            Icons
                        </div>
                        <div className={classes.Title}>
                            <h6>{props.title}</h6>
                        </div>
                        <div className={classes.DetailsBtn}>
                            <a href="">
                                Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
