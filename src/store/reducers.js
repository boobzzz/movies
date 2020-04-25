import * as R from 'ramda';

const initialState = {
    isLoading: true,
    genres: [],
    movies: [],
    genresChecked: {},
    filters: {
        page: 1,
        sort_by: 'popularity.desc',
        primary_release_year: null,
        with_genres: ''
    }
}

export const fetchReducer = (state = initialState, action) => {
    const { payload } = action
    switch (action.type) {
        case 'FETCH_GENRES':
            return {
                ...state,
                genres: [...payload.genres]
            }
        case 'FETCH_MOVIES':
            return {
                ...state,
                isLoading: false,
                movies: [...payload.results]
            }
        default:
            return state
    }
}

export const filtersReducer = (state = initialState, action) => {
    const { payload } = action
    const isChecked = (x) => x === true
    switch (action.type) {
        case 'SWITCH_PAGE':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    page: state.filters.page + 1
                }
            }
        case 'SORT_BY':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    page: 1,
                    sort_by: payload.value
                }
            }
        case 'RELEASE_DATE':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    page: 1,
                    primary_release_year: payload.value
                }
            }
        case 'CHECK_GENRES':
            state = {
                ...state,
                genresChecked: R.filter(isChecked, {
                    ...state.genresChecked,
                    [payload.id]: payload.checked
                })
            }
            return {
                ...state,
                filters: {
                    ...state.filters,
                    page: 1,
                    with_genres: R.keys(state.genresChecked).join(',')
                }
            }
        case 'CLEAR_FILTERS':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    page: 1,
                    sort_by: 'popularity.desc',
                    primary_release_year: null,
                    with_genres: ''
                }
            }
        default:
            return state
    }
}
