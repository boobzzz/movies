import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as A from '../../store/actions';
import * as C from '../../constants/constants';
import queryString from 'query-string';

import MovieCard from './MovieCard/MovieCard';
import Button from '../Button/Button';

let moviesList = []

const MoviesList = (props) => {
    const { loading, movies, filters, loadMovies, switchPage } = props
    let queryParams = filters
    let url = `${C.API_ENDPOINT}discover/movie?${
        queryString.stringify(queryParams)
    }`

    const loadMore = () => {
        switchPage()
    }

    useEffect(() => {
        loadMovies(url, C.OPTIONS)
    }, [loadMovies, url])

    if (filters.page === 1) moviesList = []
    moviesList = [...moviesList, ...movies].reduce((acc, item) =>
        acc.includes(item) ? acc : [...acc, item]
    , [])

    return (
        loading
        ? <div>Loading...</div>
        : <div>
            <div className="row">
                {moviesList.map(movie =>
                    <MovieCard
                        key={movie.id}
                        source={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        title={movie.title}
                        score={movie.vote_average}
                        overview={movie.overview} />
                )}
            </div>
            <Button loading={loading} clicked={loadMore} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.fetch.isLoading,
        movies: state.fetch.movies,
        filters: {
            page: state.filters.filters.page,
            sort_by: state.filters.filters.sort_by,
            primary_release_year: state.filters.filters.primary_release_year,
            with_genres: state.filters.filters.with_genres,
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies: (url, options) => dispatch(A.getApiData(url, options)),
        switchPage: () => dispatch({type: 'SWITCH_PAGE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
