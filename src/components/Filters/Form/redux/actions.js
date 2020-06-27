import * as T from './types';
import fetchApiData from '../../../../store/rootAction';

export const fetchGenres = (url, options) => {
    return fetchApiData(url, options, T.FETCH_GENRES)
}

export const clearFilters = () => ({type: T.CLEAR_FILTERS})
