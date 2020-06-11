import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../../../UI/Button/Button';
import classes from './MovieCard.module.css';

const MovieCard = (props) => {
    const { id, title, poster } = props
    const path = `/movie/${id}/details`

    return (
        <div className="col-6">
            <div>
                <div className={classes.MovieCard}>
                    <div className={classes.Poster}>
                        <NavLink to={path}>
                            <img src={poster} alt=""/>
                        </NavLink>
                    </div>
                    <div className={classes.MovieInfo}>
                        <div className={classes.Icons}>
                            Icons
                        </div>
                        <div className={classes.Title}>
                            <h6>{title}</h6>
                        </div>
                        <div className={classes.DetailsBtn}>
                            <Button path={path} title="details" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
