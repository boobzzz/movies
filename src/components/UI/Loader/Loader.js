import React from 'react';
import GridLoader from "react-spinners/GridLoader";

import classes from './Loader.module.css';

const Loader = (props) => {
    const { size, color, loading } = props

    return (
        <div className={classes.Loader}>
            <GridLoader size={size} color={color} loading={loading} />
        </div>
    )
}

export default Loader;
