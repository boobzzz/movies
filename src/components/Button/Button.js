import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    const { clicked, loading, itemsPerPage } = props;
    return (
        <div className={classes.NextBtn}>
            <a href="#" onClick={clicked}>
                {!loading ? `load next ${itemsPerPage}` : 'Loading...'}
            </a>
        </div>
    )
}

export default Button;
