import React from 'react';
import withMovieDetails from '../../../../HOC/withMovieDetails';
import * as C from '../../../../../utils/api/constants';

import Loader from '../../../../UI/Loader/Loader';
import classes from './Actors.module.css';
import notFound from '../../../../../assets/images/image_not_found.png';

const Actors = (props) => {
    const { loading, cast } = props.movie

    return (
        <div className={`row ${classes.ActorsBox}`}>
            {loading
            ? <Loader size="20px" color="#bd2130" loading={loading} />
            : cast.slice(0, 28).map(actor =>
                <div key={actor.id} className={`col-lg-3 col-md-4 col-sm-6 ${classes.Actor}`}>
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
