import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { getGenres } from '../../../store/reducers';
import * as A from './redux/actions';
import * as S from './redux/selectors';

import Checkbox from '../../UI/Checkbox/Checkbox';
import classes from './Genres.module.css';

const Genres = (props) => {
    const { genres, toggleCheck, cleared } = props;
    const [ isChecked, setIsChecked ] = useState([])

    useEffect(() => {
        setIsChecked(() => genres.map(genre => (
                {id: genre.id + '', name: genre.name, checked: false}
            ))
        )
    }, [genres, cleared])

    const handleCheckbox = (e) => {
        let target = e.target
        toggleCheck(target)
        setIsChecked(() => isChecked.map(item =>
            item.id === target.id
            ? {...item, checked: !item.checked}
            : item
        ))
    }

    return (
        <ul className={classes.Genres}>Choose genre:
            {isChecked.map(genre =>
                <li key={genre.id}>
                    <Checkbox
                        id={genre.id}
                        name={genre.name}
                        changed={handleCheckbox}
                        checked={genre.checked} />
                </li>
            )}
        </ul>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         genres: getGenres(state),
//     }
// }

const mapStateToProps = (state) => {
    return {
        genres: S.getGenres(state),
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         checkGenres: (targetItem) => dispatch({
//             type: 'CHECK_GENRES',
//             payload: targetItem
//         })
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCheck: (targetItem) => dispatch(A.toggleCheck(targetItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
