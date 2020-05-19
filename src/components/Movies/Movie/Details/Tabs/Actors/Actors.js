import React from 'react';
import withMovieDetails from '../../../../../HOC/withMovieDetails';
import * as C from '../../../../../../constants/constants';

import classes from './Actors.module.css';
import notFound from '../../../../../../assets/images/image_not_found.png';

const Actors = (props) => {
    const { cast } = props.movie

    return (
        <div className={`row ${classes.ActorsBox}`}>
            {cast.slice(0, 28).map(actor =>
                <div key={actor.id} className={`col-3 ${classes.Actor}`}>
                    <img src={
                        actor.profile_path !== null
                        ? `${C.GET_IMAGE}${actor.profile_path}`
                        : notFound
                    } alt=""/>
                    <div className={classes.ActorInfo}>
                        <span>{actor.name}</span>
                        <span>{actor.character}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default withMovieDetails(Actors);
