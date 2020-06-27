import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as A from './redux/actions';
import * as C from '../../../utils/api/constants';

import Button from '../../UI/Button/Button';
import FiltersSelects from '../Selects/FiltersSelects';
import FiltersGenres from '../Genres/FiltersGenres';
import classes from './FiltersForm.module.css';

const url = `${C.API_ENDPOINT}/genre/movie/list`
const options = C.OPTIONS

const FiltersForm = (props) => {
    const { loadGenres, clearFilters } = props
    const [ filtersCleared, setFiltersCleared ] = useState(false)

    useEffect(() => {
        loadGenres(url, options)
        setFiltersCleared(false)
    }, [loadGenres, filtersCleared])

    const clearAllFilters = () => {
        setFiltersCleared(true)
        clearFilters()
    }

    return (
        <form className={classes.FiltersBox}>
            <Button path="/" title="CLEAR ALL FILTERS" clicked={clearAllFilters} />
            <FiltersSelects cleared={filtersCleared} />
            <FiltersGenres cleared={filtersCleared} />
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadGenres: (url, options) => dispatch(A.fetchGenres(url, options)),
        clearFilters: () => dispatch(A.clearFilters())
    }
}

export default connect(null, mapDispatchToProps)(FiltersForm);
