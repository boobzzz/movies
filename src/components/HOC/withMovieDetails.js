import React, { useContext } from 'react';
import { DetailsContext } from '../../contexts/DetailsContext';

const withMovieDetails = (Component) => (props) => {
    const context = useContext(DetailsContext)

    return (
        <Component {...props} movie={context} />
    )
}

export default withMovieDetails;
