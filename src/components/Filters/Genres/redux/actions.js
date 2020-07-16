import * as T from './types';
import * as R from '../../../../store/rootActions';

export const fetchGenres = (url, options) => {
    return R.fetchApiData(url, options, T.FETCH_GENRES)
}

export const getChecked = (targetItem) => ({
    type: T.CHECK_GENRES,
    payload: targetItem
})

export const toggleCheck = (targetItem) => ({
    type: T.TOGGLE_CHECK,
    payload: targetItem
})
