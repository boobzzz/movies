import React from 'react';
import withMovieDetails from '../../../../HOC/withMovieDetails';

import Loader from '../../../../UI/Loader/Loader';
import classes from './Details.module.css';

const Details = (props) => {
    const { loading, details } = props.movie

    const movieDetails = [
        {
            name: 'Status',
            value: details.status
        },
        {
            name: 'Release Date',
            value: details.release_date
        },
        {
            name: 'Runtime',
            value: `${details.runtime} min`
        },
        {
            name: 'Original Language',
            value: details.original_language
        },
        {
            name: 'Production Countries',
            value: details.production_countries
        },
        {
            name: 'Budget',
            value: `${details.budget} $`
        },
        {
            name: 'Revenue',
            value: `${details.revenue} $`
        },
        {
            name: 'Production Companies',
            value: details.production_companies
        },
        {
            name: 'Genres',
            value: details.genres
        }
    ]

    return (
        <table>
            <tbody>
                {loading
                ? <Loader size="20px" color="#bd2130" loading={loading} />
                : movieDetails.map(item =>
                    <tr key={item.name} className={classes.TableRow}>
                        <th>{item.name}</th>
                        <td>
                            {
                                Array.isArray(item.value)
                                ? item.value.map(value => value.name).join(', ')
                                : item.value
                            }
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default withMovieDetails(Details);
