import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFiltersSelector, getMoviesSelector, getIsLoading } from '../../../store/reducers';
import * as A from '../../../store/actions';
import * as C from '../../../constants/constants';
import queryString from 'query-string';

import MovieCard from '../Movie/Card/MovieCard';
import Button from '../../UI/Button/Button';
import notFound from '../../../assets/images/image_not_found.png';
import Loader from '../../UI/Loader/Loader';
import classes from './MoviesList.module.css';

const MoviesList = (props) => {
    const { filters, movies, loading, loadMovies, switchPage } = props
    let queryParams = {...filters}
    let url = `${C.API_ENDPOINT}/discover/movie?${
        queryString.stringify(queryParams)
    }`
    const options = C.OPTIONS

    const loadMore = () => {
        switchPage()
    }

    useEffect(() => {
        loadMovies(url, options)
    }, [loadMovies, url, options])

    return (
        loading
        ? <Loader size="20" color="#bd2130" loading={loading} />
        : <div className={classes.MoviesList}>
            <div className="row">
                {movies.map(movie =>
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        poster={movie.poster_path !== null
                            ? `${C.GET_IMAGE}${movie.poster_path}`
                            : notFound}
                        title={movie.title} />
                )}
            </div>
            <Button
                path="/"
                title="load 20 more"
                clicked={loadMore} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: getFiltersSelector(state),
        movies: getMoviesSelector(state),
        loading: getIsLoading(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies: (url, options) => dispatch(A.fetchMovies(url, options)),
        switchPage: () => dispatch({type: 'SWITCH_PAGE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
