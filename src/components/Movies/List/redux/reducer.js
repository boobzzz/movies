import * as T from './types';

const initialState = {
    isLoadingMovies: false,
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
        default:
            return state
    }
}

export default moviesListReducer;
