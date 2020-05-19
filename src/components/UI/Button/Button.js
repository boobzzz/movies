import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.css';

const Button = (props) => {
    const { path, title, clicked } = props;

    return (
        <div className={classes.Button}>
            <Link to={path} onClick={clicked}>
                {title}
            </Link>
        </div>
    )
}

export default Button;
