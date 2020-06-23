import * as R from 'ramda';
import { createSelector } from 'reselect';

const initialState = {
    isLoading: false,
    filters: {
        page: 1,
        sort_by: 'popularity.desc',
        primary_release_year: null,
        with_genres: ''
    },
    genresChecked: {},
    genres: [],
    movies: [],
    details: {},
    videos: [],
    cast: []
}

export const fetchReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'FETCH_GENRES':
            return {
                ...state,
                genres: [...payload.genres]
            }
        case 'FETCH_MOVIES':
            state = {
                ...state,
                isLoading: true
            }
            return {
                ...state,
                movies: [...payload.results],
                isLoading: false
            }
        case 'FETCH_DETAILS':
            state = {
                ...state,
                isLoading: true
            }
            return {
                ...state,
                details: {...payload},
                isLoading: false
            }
        case 'FETCH_VIDEOS':
            state = {
                ...state,
                isLoading: true
            }
            return {
                ...state,
                videos: [...payload.results],
                isLoading: false
            }
        case 'FETCH_CAST':
            state = {
                ...state,
                isLoading: true
            }
            return {
                ...state,
                cast: [...payload.cast],
                isLoading: false
            }
        default:
            return state
    }
}

export const filtersReducer = (state = initialState, action) => {
    const { type, payload } = action
    const isChecked = (x) => x === true
    switch (type) {
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


export const getFilters = (state) => state.filters.filters

let displayMovies = []
const getMovies = (state) => state.fetch.movies
const getPage = (state) => state.filters.filters.page
export const getMoviesSelector = createSelector(getMovies, getPage, (movies, page) => {
    if (page === 1) displayMovies = []
    displayMovies = [...displayMovies, ...movies]

    return R.uniq(displayMovies)
})

export const getGenres = (state) => state.fetch.genres
export const getDetails = (state) => state.fetch.details
export const getVideos = (state) => state.fetch.videos
export const getCast = (state) => state.fetch.cast
export const getIsLoading = (state) => state.fetch.isLoading
