import * as T from './types';
import * as R from '../../../../store/rootActions';

export const fetchMovies = (url, options) => {
    return R.fetchApiData(url, options, T.FETCH_MOVIES)
}

export const switchPage = (currentPage) => {
    return {
        type: T.SWITCH_PAGE,
        payload: currentPage
    }
}
