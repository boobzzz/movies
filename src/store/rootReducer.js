import { combineReducers } from 'redux';

import selectsReducer from '../components/Filters/Selects/redux/reducer';
import genresReducer from '../components/Filters/Genres/redux/reducer';
import clearFiltersReducer from '../components/Filters/Form/redux/reducer';
import moviesListReducer from '../components/Movies/List/redux/reducer';
import fetchDetailsReducer from '../components/Movies/Movie/Details/redux/reducer';

const reducers = combineReducers({
    selects: selectsReducer,
    genres: genresReducer,
    cleared: clearFiltersReducer,
    movies: moviesListReducer,
    details: fetchDetailsReducer
})

export default reducers;
