import * as T from './types';

const initialState = {
    isLoadingDetails: true,
    details: {},
    videos: [],
    cast: []
}

const fetchDetailsReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case T.FETCH_DETAILS:
            state = {...state, isLoadingDetails: true}
            return {
                ...state,
                details: {...payload},
                isLoadingDetails: false
            }
        case T.FETCH_VIDEOS:
            state = {...state, isLoadingDetails: true}
            return {
                ...state,
                videos: [...payload.results],
                isLoadingDetails: false
            }
        case T.FETCH_CAST:
            state = {...state, isLoadingDetails: true}
            return {
                ...state,
                cast: [...payload.cast],
                isLoadingDetails: false
            }
        default:
            return state
    }
}

export default fetchDetailsReducer;
