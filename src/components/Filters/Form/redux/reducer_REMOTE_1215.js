import * as T from './types';
import * as R from 'ramda';

const initialState = {
    page: 1,
    sort_by: 'popularity.desc',
    primary_release_year: null,
    genresChecked: {},
    with_genres: '',
}

const filtersReducer = (state = initialState, action) => {
    const { type, payload } = action
    const isChecked = (x) => x === true

    switch (type) {
        case T.SWITCH_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        case T.SORT_BY:
            return {
                ...state,
                page: 1,
                sort_by: payload
            }
        case T.RELEASE_DATE:
            return {
                ...state,
                page: 1,
                primary_release_year: payload
            }
        case T.TOGGLE_CHECK:
            state = {
                ...state,
                genresChecked: R.filter(isChecked, {
                    ...state.genresChecked,
                    [payload.id]: payload.checked
                })
            }
            return {
                ...state,
                page: 1,
                with_genres: R.keys(state.genresChecked).join(',')
            }
        case T.CLEAR_FILTERS:
            return {
                ...state,
                page: 1,
                sort_by: 'popularity.desc',
                primary_release_year: null,
                with_genres: ''
            }
        default:
            return state
    }
}

export default filtersReducer;
