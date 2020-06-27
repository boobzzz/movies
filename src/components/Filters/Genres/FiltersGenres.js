import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as A from './redux/actions';
import * as S from './redux/selectors';

import Checkbox from '../../UI/Checkbox/Checkbox';
import classes from './FiltersGenres.module.css';

const FiltersGenres = (props) => {
    const { genres, toggleCheck, cleared } = props;
    const [ isChecked, setIsChecked ] = useState([])

    useEffect(() => {
        setIsChecked(genres)
    }, [cleared, genres])

    const changeHandler = (e) => {
        let target = e.target

        setIsChecked(() => isChecked.map(genre =>
            genre.id === target.id
            ? {...genre, checked: !genre.checked}
            : genre
        ))
        toggleCheck(target)
    }

    return (
        <ul className={classes.Genres}>Choose genre:
            {isChecked.map(genre =>
                <li key={genre.id}>
                    <Checkbox
                        id={genre.id}
                        name={genre.name}
                        changed={changeHandler}
                        checked={genre.checked} />
                </li>
            )}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        genres: S.getGenresSelector(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCheck: (targetItem) => dispatch(A.toggleCheck(targetItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersGenres);
