import React from 'react';
import { NavLink } from 'react-router-dom';
import * as C from '../../../utils/api/constants';
import notFound from '../../../assets/images/image_not_found.png';

import Progressbar from '../../UI/Progressbar/Progressbar';
import IconsHeart from '../../UI/Icons/Heart';
import IconsStar from '../../UI/Icons/Star';
import Button from '../../UI/Button/Button';
import classes from './MoviesCard.module.css';

const MoviesCard = ({ movie }) => {
    const title = movie.title
    const poster = movie.poster_path !== null
        ? `${C.GET_IMAGE}${movie.poster_path}`
        : notFound
    const rate = movie.vote_average * 10
    const detailsUrl = `/movie/${movie.id}/details`

    return (
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className={classes.OuterCard}>
                <div className={`${classes.InnerCard}`}>
                    <div className={`${classes.Poster} ${classes.Front}`}>
                        <NavLink to={detailsUrl}>
                            <img src={poster} alt=""/>
                        </NavLink>
                    </div>
                    <div className={`${classes.MovieInfo} ${classes.Back}`}>
                        <div>
                            <div className={classes.Icons}>
                                <Progressbar
                                    progress={rate}
                                    radius={28}
                                    strokeWidth={10}
                                    trackWidth={3} />
                                    <IconsHeart id={movie.id} size={30} />
                                    <IconsStar id={movie.id} size={30} />
                            </div>
                            <div className={classes.Title}>
                                <NavLink to={detailsUrl}>
                                    {title}
                                </NavLink>
                            </div>
                        </div>
                        <div className={classes.DetailsBtn}>
                            <Button path={detailsUrl} title="details" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviesCard;
