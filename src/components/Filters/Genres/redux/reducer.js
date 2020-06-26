import * as T from './types';
// import * as R from 'ramda';

// const initialState = {
//     with_genres: '',
//     genresChecked: {},
//     genres: []
// }

// const genresReducer = (state = initialState, action) => {
//     const { type, payload } = action
//     const isChecked = (x) => x === true
//     switch (type) {
//         case T.FETCH_GENRES:
//             return {
//                 ...state,
//                 genres: [...payload.genres]
//             }
//         case T.TOGGLE_CHECK:
//             state = {
//                 ...state,
//                 genresChecked: R.filter(isChecked, {
//                     ...state.genresChecked,
//                     [payload.id]: payload.checked
//                 })
//             }
//             return {
//                 ...state,
//                 with_genres: R.keys(state.genresChecked).join(',')
//             }
//         default:
//             return state
//     }
// }

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
