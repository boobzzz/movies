import * as T from './types';

const initialState = {
    page: 1,
    sort_by: 'popularity.desc',
    primary_release_year: null,
    with_genres: {},
}

const filtersReducer = (state = initialState, action) => {
    const { type, payload } = action
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
            return {
                ...state,
                page: 1,
                with_genres: {
                    ...state.with_genres,
                    [payload.id]: payload.checked
                }
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
