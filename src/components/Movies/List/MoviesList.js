import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as A from './redux/actions';
import * as S from './redux/selectors';
import * as C from '../../../utils/api/constants';
import queryString from 'query-string';

import MoviesCard from '../Card/MoviesCard';
import Button from '../../UI/Button/Button';
import Loader from '../../UI/Loader/Loader';
import classes from './MoviesList.module.css';

const endpoint = C.API_ENDPOINT
const options = {
    headers: {
        'Authorization': `Bearer ${C.API_KEY_V4}`
    }
}

const MoviesList = (props) => {
    const { loading, filters, movies, loadMovies, switchPage } = props
    let queryParams = filters
    let url = `${endpoint}/discover/movie?${
        queryString.stringify(queryParams)
    }`

    const loadMore = () => {
        let { page } = filters
        switchPage(page)
    }

    useEffect(() => {
        loadMovies(url, options)
    }, [loadMovies, url])

    return (
        loading
        ? <Loader size="20px" color="#bd2130" loading={loading} />
        : <div className={classes.MoviesList}>
            <div className="row justify-content-between">
                {movies.map(movie =>
                    <MoviesCard key={movie.id} movie={movie} />
                )}
            </div>
            <div className={classes.ButtonBox}>
                <Button
                    path="#!"
                    title="load 20 more"
                    clicked={loadMore} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: S.getIsLoading(state),
        filters: S.getFiltersSelector(state),
        movies: S.getMoviesSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies: (url, options) => dispatch(A.fetchMovies(url, options)),
        switchPage: (currentPage) => dispatch(A.switchPage(currentPage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
