import * as T from './types';

const initialState = {
    isLoadingMovies: true,
    movies: []
}

const moviesListReducer = (state = initialState, action) => {
    const { type, payload } = action
    if (type === T.FETCH_MOVIES) {
        return {
            ...state,
            movies: [...payload.results],
            isLoadingMovies: false
        }
    }

    return state
}

export default moviesListReducer;
