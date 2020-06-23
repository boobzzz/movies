import * as R from 'ramda';
import { createSelector } from 'reselect';

const getSortBy = (state) => state.selects.sort_by
const getRelDate = (state) => state.selects.primary_release_year
const getWithGenres = (state) => state.genres.with_genres
const getPage = (state) => state.movies.page

let currentPage
let currentSort
let currentYear
let currentGenres
const getPageSelector = createSelector(
    getPage, getSortBy, getRelDate, getWithGenres,
    (page, sort_by, primary_release_year, with_genres) => {
        let previousSort = currentSort
        let previousYear = currentYear
        let previousGenres = currentGenres

        currentPage = page
        currentSort = sort_by
        currentYear = primary_release_year
        currentGenres = with_genres

        if (previousSort !== currentSort
            || previousYear !== currentYear
            || previousGenres !== currentGenres) {
            currentPage = 1
        }

    return currentPage
})

const getCleared = (state) => state.cleared.cleared

let currentFilters
export const getFiltersSelector = createSelector(
    getPageSelector, getSortBy, getRelDate, getWithGenres, getCleared,
    (currentPage, sort_by, primary_release_year, with_genres, cleared) => {
        let filters = {
            page: currentPage,
            sort_by: sort_by,
            primary_release_year: primary_release_year,
            with_genres: with_genres
        }
        let previousFilters = currentFilters
        currentFilters = cleared

        if (currentFilters !== previousFilters) {
            filters = {
                page: 1,
                sort_by: 'popularity.desc',
                primary_release_year: null,
                with_genres: ''
            }
        }

        return filters
    }
)

let displayMovies = []
const getMovies = (state) => state.movies.movies
export const getMoviesSelector = createSelector(
    getMovies, getPageSelector,
    (movies, page) => {
        if (page === 1) displayMovies = []
        displayMovies = [...displayMovies, ...movies]

        return R.uniq(displayMovies)
    }
)

export const getIsLoading = (state) => state.movies.isLoadingMovies
