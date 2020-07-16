import * as T from './types';
import * as R from '../../../../store/rootActions';

export const fetchMovieDetails = (url, options) => {
    return R.fetchApiData(url, options, T.FETCH_DETAILS)
}

export const fetchMovieVideos = (url, options) => {
    return R.fetchApiData(url, options, T.FETCH_VIDEOS)
}

export const fetchMovieCast = (url, options) => {
    return R.fetchApiData(url, options, T.FETCH_CAST)
}
