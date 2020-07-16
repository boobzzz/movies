import * as R from 'ramda';
import { createSelector } from 'reselect';

export const getIsLoading = (state) => state.movies.isLoadingMovies
export const getDetails = (state) => state.details.details

const getPage = (state) => state.filters.page
const getSortByFilter = (state) => state.filters.sort_by
const getRelYearFilter = (state) => state.filters.primary_release_year
const getWithGenresFilter = (state) => state.filters.with_genres
const getMovies = (state) => state.movies.movies

const getGenresSelector = createSelector(getWithGenresFilter, (with_genres) => {
    const isChecked = (x) => x === true
    with_genres = R.filter(isChecked, with_genres)

    return R.keys(with_genres).join(',')
})

export const getFiltersSelector = createSelector(
    getPage, getSortByFilter, getRelYearFilter, getGenresSelector,
    (page, sort_by, primary_release_year, with_genres) => {
        let filters = {
            page: page,
            sort_by: sort_by,
            primary_release_year: primary_release_year,
            with_genres: with_genres
        }

        return filters
    }
)

let displayMovies = []
export const getMoviesSelector = createSelector(getMovies, getPage, (movies, page) => {
    if (page === 1) displayMovies = []
    displayMovies = [...displayMovies, ...movies]

    return R.uniq(displayMovies)
})
