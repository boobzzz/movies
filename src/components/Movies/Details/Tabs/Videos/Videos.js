import React from 'react';
import withMovieDetails from '../../../../HOC/withMovieDetails';

import classes from './Videos.module.css';

const Videos = (props) => {
    const { videos } = props.movie

    return (
        <div className={`row ${classes.VideosBox}`}>
            {videos.map(video =>
                <div key={video.id} className={`col-4 ${classes.Frame}`}>
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
