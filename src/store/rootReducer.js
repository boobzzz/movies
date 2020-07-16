import { combineReducers } from 'redux';

import genresReducer from '../components/Filters/Genres/redux/reducer';
import filtersReducer from '../components/Filters/Form/redux/reducer';
import clearFiltersReducer from '../components/Filters/Form/redux/reducer';
import moviesListReducer from '../components/Movies/List/redux/reducer';
import fetchDetailsReducer from '../components/Movies/Details/redux/reducer';
import authReducer from '../components/SignIn/Form/redux/reducer';

const reducers = combineReducers({
    filters: filtersReducer,
    cleared: clearFiltersReducer,
    genres: genresReducer,
    movies: moviesListReducer,
    details: fetchDetailsReducer,
    auth: authReducer
})

export default reducers;
