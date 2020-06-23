import fetchApiData from '../../../../store/rootAction';
import * as T from './types';

export const fetchGenres = (url, options) => {
    return fetchApiData(url, options, T.FETCH_GENRES)
}

export const clearFilters = () => ({type: T.CLEAR_FILTERS})
