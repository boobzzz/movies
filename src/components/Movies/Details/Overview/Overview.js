import React from 'react';
import * as C from '../../../../utils/api/constants';
import withMovieDetails from '../../../HOC/withMovieDetails';

import Progressbar from '../../../UI/Progressbar/Progressbar';
import IconsHeart from '../../../UI/Icons/Heart';
import IconsStar from '../../../UI/Icons/Star';
import classes from './Overview.module.css';

const Overview = (props) => {
    const { details } = props.movie
    const rate = details.vote_average * 10
    const id = details.id

    return (
        <div className={`col-xl-8 col-lg-10 col-md-12 col-sm-12 ${classes.Desc}`}>
            <div className={`${classes.Poster}`}>
                <img src={`${C.GET_IMAGE}${details.poster_path}`} alt=""/>
            </div>
            <div className={`${classes.Overview}`}>
                <div>
                    <h2>{details.title}</h2>
                    <div className={classes.Icons}>
                        <Progressbar
                            progress={rate}
                            radius={40}
                            strokeWidth={13}
                            trackWidth={4} />
                        <IconsHeart id={id} size={40} />
                        <IconsStar id={id} size={40} />
                    </div>
                </div>
                <p>{details.overview}</p>
            </div>
        </div>
    )
}

export default withMovieDetails(Overview);
