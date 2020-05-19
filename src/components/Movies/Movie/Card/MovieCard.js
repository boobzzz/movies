import React from 'react';

import Button from '../../../UI/Button/Button';
import classes from './MovieCard.module.css';

const MovieCard = (props) => {
    const { id, title, poster } = props

    return (
        <div className="col-6">
            <div>
                <div className={classes.MovieCard}>
                    <div className={classes.Poster}>
                        <img src={poster} alt=""/>
                    </div>
                    <div className={classes.MovieInfo}>
                        <div className={classes.Icons}>
                            Icons
                        </div>
                        <div className={classes.Title}>
                            <h6>{title}</h6>
                        </div>
                        <div className={classes.DetailsBtn}>
                            <Button path={`/movie/${id}/details`} title="details" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
