import * as T from './types';
<<<<<<< HEAD
=======
import * as R from 'ramda';
>>>>>>> 541ceac5deab7001ef9b0840f90465be132ac043

const initialState = {
    page: 1,
    sort_by: 'popularity.desc',
    primary_release_year: null,
<<<<<<< HEAD
    with_genres: {},
=======
    genresChecked: {},
    with_genres: '',
>>>>>>> 541ceac5deab7001ef9b0840f90465be132ac043
}

const filtersReducer = (state = initialState, action) => {
    const { type, payload } = action
<<<<<<< HEAD
=======
    const isChecked = (x) => x === true

>>>>>>> 541ceac5deab7001ef9b0840f90465be132ac043
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
<<<<<<< HEAD
            return {
                ...state,
                page: 1,
                with_genres: {
                    ...state.with_genres,
                    [payload.id]: payload.checked
                }
=======
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
>>>>>>> 541ceac5deab7001ef9b0840f90465be132ac043
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
