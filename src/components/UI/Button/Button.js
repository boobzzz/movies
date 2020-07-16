import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Button.module.css';

const Button = (props) => {
    const { classname, path, title, clicked } = props;

    return (
        <div className={`${classes.Button} ${classname}`}>
            <NavLink to={path} onClick={clicked}>
                {title}
            </NavLink>
        </div>
    )
}

export default Button;
