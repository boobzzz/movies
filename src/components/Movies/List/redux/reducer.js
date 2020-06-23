import * as T from './types';

const initialState = {
    isLoadingMovies: false,
    page: 1,
    movies: []
}

const moviesListReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case T.FETCH_MOVIES:
            state = {
                ...state,
                isLoadingMovies: true
            }
            return {
                ...state,
                movies: [...payload.results],
                isLoadingMovies: false
            }
        case T.SWITCH_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        default:
            return state
    }
}

export default moviesListReducer;
