import * as T from './types';

const initialState = {
    genres: []
}

const genresReducer = (state = initialState, action) => {
    const { type, payload } = action

    if (type === T.FETCH_GENRES) {
        return {
            ...state,
            genres: [...payload.genres]
        }
    }

    return state
}

export default genresReducer;
