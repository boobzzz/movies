import React from 'react';
import * as C from '../../../../../constants/constants';
import withMovieDetails from '../../../../HOC/withMovieDetails';

import classes from './Overview.module.css';

const Overview = (props) => {
    const { details } = props.movie

    return (
        <div className={`col-8 ${classes.Desc}`}>
            <div className={classes.Poster}>
                <img src={`${C.GET_IMAGE}${details.poster_path}`} alt=""/>
            </div>
            <div className={classes.Overview}>
                <h2>{details.title}</h2>
                <span className={classes.Icons}>UI icons</span>
                <p>{details.overview}</p>
            </div>
        </div>
    )
}

export default withMovieDetails(Overview);
