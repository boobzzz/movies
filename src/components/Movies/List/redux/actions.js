import * as T from './types';
import fetchApiData from '../../../../store/rootAction';

export const fetchMovies = (url, options) => {
    return fetchApiData(url, options, T.FETCH_MOVIES)
}

export const switchPage = (currentPage) => {
    return {
        type: T.SWITCH_PAGE,
        payload: currentPage
    }
}
