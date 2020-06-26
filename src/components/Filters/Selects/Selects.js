import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import * as T from './redux/types';
import * as A from './redux/actions';

import Select from '../../UI/Select/Select';
import './Selects.module.css';

const optionsSortBy = {
    title: 'Sort By:',
    options: [
        {name: 'Popularity descending', value: 'popularity.desc'},
        {name: 'Popularity ascending', value: 'popularity.asc'},
        {name: 'Rating descending', value: 'vote_average.desc'},
        {name: 'Rating ascending', value: 'vote_average.asc'},
    ],
    value: 'default'
}
const fromYear = 1990
const d = new Date()
const currentYear = d.getFullYear()
const optionsReleaseDate = {
    title: 'Release date:',
    options: R.range(fromYear, currentYear + 1).map(year => (
        {name: year + '', value: year}
    )),
    value: 'default'
}
const selects = [optionsSortBy, optionsReleaseDate]

const Selects = (props) => {
    const { getSelects, cleared } = props
    const [ isSelected, setIsSelected ] = useState([])

    useEffect(() => {
        setIsSelected(selects)
    }, [cleared])

    const handleSelect = (e) => {
        let target = e.target.value
        let action = target.length > 4 ? T.SORT_BY : T.RELEASE_DATE

        target.length > 4
        ? setIsSelected([
            {...isSelected[0], value: target},
            {...isSelected[1]}
        ])
        : setIsSelected([
            {...isSelected[0]},
            {...isSelected[1], value: target}
        ])

        getSelects(action, target)
    }

    return (
        isSelected.map(select =>
            <Select
                key={select.title}
                name={select.title}
                options={select.options}
                changed={handleSelect}
                selectValue={select.value} />
        )
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSelects: (actionType, targetValue) => dispatch(
            A.getSelects(actionType, targetValue)
        )
    }
}

export default connect(null, mapDispatchToProps)(Selects);
