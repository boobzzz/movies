import * as T from './types'

const initialState = {
    cleared: false
}

const clearFiltersReducer = (state = initialState, action) => {
    if (action.type === T.CLEAR_FILTERS) {
        return {
            ...state,
            cleared: !state.cleared
        }
    }

    return state
}

export default clearFiltersReducer;
