import React from 'react';
import withMovieDetails from '../../../../HOC/withMovieDetails';

import Loader from '../../../../UI/Loader/Loader';
import classes from './Videos.module.css';

const Videos = (props) => {
    const { loading, videos } = props.movie

    return (
        <div className={`row ${classes.VideosBox}`}>
            {loading
            ? <Loader size="20px" color="#bd2130" loading={loading} />
            : videos.map(video =>
                <div
                    key={video.id}
                    className={`col-xl-4 col-lg-6 col-md-6 col-sm-6 ${classes.Frame}`}>
                    <iframe
                        title="video"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        frameBorder="0">
                    </iframe>
                </div>
            )}
        </div>
    )
}

export default withMovieDetails(Videos);
