import React from 'react';

import classes from '../Filters.module.css';

const Submit = (props) => {
    const { clicked } = props;

    return (
        <input
            type="submit"
            className={classes.ClearFiltersBtn}
            onClick={clicked}
            value="CLEAR ALL FILTERS"/>
    )
}

export default Submit;
