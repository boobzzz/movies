import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { DetailsContext } from '../../../contexts/DetailsContext';
import * as A from './redux/actions';
import * as S from './redux/selectors';
import * as C from '../../../utils/api/constants';

import Loader from '../../UI/Loader/Loader';
import Overview from './Overview/Overview';
import Tabs from './Tabs/Tabs';

import classes from './MoviesDetails.module.css';

const MoviesDetails = (props) => {
    const { details, videos, cast, loading, loadDetails, loadVideos, loadCast } = props
    const { id } = useParams()
    const detailsUrl = `${C.API_ENDPOINT}/movie/${id}`
    const videosUrl = `${detailsUrl}/videos`
    const creditsUrl = `${detailsUrl}/credits`
    const options = C.OPTIONS
    const background = {
        backgroundImage: `url(${C.GET_IMAGE}${details.backdrop_path})`
    }

    useEffect(() => {
        loadDetails(detailsUrl, options)
        loadVideos(videosUrl, options)
        loadCast(creditsUrl, options)
    }, [
        detailsUrl,
        videosUrl,
        creditsUrl,
        options,
        loadDetails,
        loadVideos,
        loadCast
    ])
    const loaded = true
    return (
        <DetailsContext.Provider value={{
            details: details,
            videos: videos,
            cast: cast,
            loading: loading
        }}>
            {loading
            ? <Loader size="20" color="#bd2130" loading={loaded} />
            : <div>
                <section className={`row ${classes.DescBox}`} style={background}>
                    <Overview />
                </section>
                <section className={`row ${classes.Content}`}>
                    <Tabs />
                </section>
            </div>}
        </DetailsContext.Provider>
    )
}

const mapStateToProps = (state) => {
    return {
        details: S.getDetails(state),
        videos: S.getVideos(state),
        cast: S.getCast(state),
        loading: S.getIsLoading(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadDetails: (url, options) => dispatch(A.fetchMovieDetails(url, options)),
        loadVideos: (url, options) => dispatch(A.fetchMovieVideos(url, options)),
        loadCast: (url, options) => dispatch(A.fetchMovieCast(url, options))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesDetails);
