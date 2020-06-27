import * as T from './types';
import fetchApiData from '../../../../store/rootAction';

export const fetchGenres = (url, options) => {
    return fetchApiData(url, options, T.FETCH_GENRES)
}

export const getChecked = (targetItem) => ({
    type: T.CHECK_GENRES,
    payload: targetItem
})

export const toggleCheck = (targetItem) => ({
    type: T.TOGGLE_CHECK,
    payload: targetItem
})
