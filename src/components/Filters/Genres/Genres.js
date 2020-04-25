import React, { useState, useEffect } from 'react';

import classes from './Genres.module.css';

const Genres = (props) => {
    const { genres, changed, cleared } = props;
    const [ isChecked, setIsChecked ] = useState([])
    console.log(cleared);
    useEffect(() => {
        setIsChecked(() => genres.map(genre => (
                {id: genre.id + '', name: genre.name, checked: false}
            ))
        )
    }, [genres, cleared])

    const handleCheckbox = (e) => {
        let target = e.target
        changed(target)

        setIsChecked(() => isChecked.map(item =>
            item.id === target.id ? {...item, checked: !item.checked} : item
        ))
    }

    return (
        <ul className={classes.Genres}>Choose genre:
            {isChecked.map(genre =>
                <li key={genre.id}>
                    <input
                        type="checkbox"
                        id={genre.id}
                        onChange={handleCheckbox}
                        checked={genre.checked}/>
                    <span className={classes.CheckboxCustom}></span>
                    <label htmlFor={genre.id}>{genre.name}</label>
                </li>
            )}
        </ul>
    )
}

export default Genres;
