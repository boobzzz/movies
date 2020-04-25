import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import * as A from '../../store/actions';
import * as C from '../../constants/constants';

import Submit from './Submit/Submit';
import Select from './Select/Select';
import Genres from './Genres/Genres';
import classes from './Filters.module.css';

const Filters = (props) => {
    const { genres, getSelected, loadGenres, checkGenres, clearFilters } = props
    const [ isCleared, setIsCleared ] = useState(false)
    const optionsSortBy = [
        {name: 'Popularity descending', value: 'popularity.desc'},
        {name: 'Popularity ascending', value: 'popularity.asc'},
        {name: 'Rating descending', value: 'vote_average.desc'},
        {name: 'Rating ascending', value: 'vote_average.asc'},
    ]
    const fromYear = 1990
    const d = new Date()
    let currentYear = d.getFullYear()
    let optionsReleaseDate = R.range(fromYear, currentYear + 1).map(year => (
        {name: year + '', value: year}
    ))

    useEffect(() => {
        const url = `${C.API_ENDPOINT}genre/movie/list`

        loadGenres(url, C.OPTIONS)
        setIsCleared(false)
    }, [loadGenres, isCleared])

    const handleSelect = (e) => {
        let target = e.target
        let action = isNaN(target.value) ? 'SORT_BY' : 'RELEASE_DATE'

        getSelected(action, target)
    }

    const clearAllFilters = (e) => {
        e.preventDefault()

        clearFilters()
        setIsCleared(true)
    }

    return (
        <form className={classes.FiltersBox}>
            <Submit clicked={clearAllFilters} />
            <Select name="Sort By:" options={optionsSortBy} changed={handleSelect} />
            <Select name="Release date:" options={optionsReleaseDate} changed={handleSelect} />
            <Genres genres={genres} changed={checkGenres} cleared={isCleared} />
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        genres: state.fetch.genres,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadGenres: (url, options) => dispatch(A.getApiData(url, options)),
        checkGenres: (targetItem) => dispatch({
            type: 'CHECK_GENRES',
            payload: targetItem
        }),
        getSelected: (actionType, targetItem) => dispatch({
            type: actionType,
            payload: targetItem,
        }),
        clearFilters: () => dispatch({type: 'CLEAR_FILTERS'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
