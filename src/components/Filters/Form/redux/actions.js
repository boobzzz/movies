import * as T from './types';
import * as R from '../../../../store/rootActions';

export const fetchGenres = (url, options) => {
    return R.fetchApiData(url, options, T.FETCH_GENRES)
}

export const clearFilters = () => ({type: T.CLEAR_FILTERS})
