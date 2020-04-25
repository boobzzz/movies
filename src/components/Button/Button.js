import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    const { clicked, loading } = props;
    return (
        <div className={classes.NextBtn}>
            <a href="#/" onClick={clicked}>
                {!loading ? 'load 20 more' : 'Loading...'}
            </a>
        </div>
    )
}

export default Button;
