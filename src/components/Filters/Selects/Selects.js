import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';

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
    const { getSelected, cleared } = props;
    const [ isSelected, setIsSelected ] = useState([])

    useEffect(() => {
        setIsSelected(selects)
    }, [cleared])

    const handleSelect = (e) => {
        let target = e.target
        let action = target.value.length > 4 ? 'SORT_BY' : 'RELEASE_DATE'

        target.value.length > 4
        ? setIsSelected([
            {...isSelected[0], value: target.value},
            {...isSelected[1]}
        ])
        : setIsSelected([
            {...isSelected[0]},
            {...isSelected[1], value: target.value}
        ])

        getSelected(action, target)
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
        getSelected: (actionType, targetItem) => dispatch({
            type: actionType,
            payload: targetItem,
        })
    }
}

export default connect(null, mapDispatchToProps)(Selects);
