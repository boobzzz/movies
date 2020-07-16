import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as A from './redux/actions';
import * as C from '../../../utils/api/constants';
import { Collapse } from 'reactstrap';

import Button from '../../UI/Button/Button';
import FiltersSelects from '../Selects/FiltersSelects';
import FiltersGenres from '../Genres/FiltersGenres';
import './FiltersForm.css';

const url = `${C.API_ENDPOINT}/genre/movie/list`
const options = {
    headers: {
        'Authorization': `Bearer ${C.API_KEY_V4}`
    }
}

const FiltersForm = (props) => {
    const { loadGenres, clearFilters } = props
    const [ filtersCleared, setFiltersCleared ] = useState(false)
    const [ isOpen, setIsOpen ] = useState(false)

    useEffect(() => {
        loadGenres(url, options)
        setFiltersCleared(false)
    }, [loadGenres, filtersCleared])

    const clearAllFilters = () => {
        setFiltersCleared(true)
        clearFilters()
    }

    const toggleCollapse = () => setIsOpen(!isOpen)

    return (
        <>
            <Button
                classname="Collapse"
                path=""
                title="TOOGLE FILTERS"
                clicked={toggleCollapse} />
            <Collapse isOpen={isOpen}>
                <form className="FiltersBox">
                    <Button path="" title="CLEAR ALL FILTERS" clicked={clearAllFilters} />
                    <FiltersSelects cleared={filtersCleared} />
                    <FiltersGenres cleared={filtersCleared} />
                </form>
            </Collapse>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadGenres: (url, options) => dispatch(A.fetchGenres(url, options)),
        clearFilters: () => dispatch(A.clearFilters())
    }
}

export default connect(null, mapDispatchToProps)(FiltersForm);
