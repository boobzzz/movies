import React from 'react';

import classes from './Filters.module.css';

const Filters = (props) => {
    return (
        <form className={classes.FiltersBox}>
            <input
                type="submit"
                className={classes.ClearFiltersBtn}
                value="CLEAR ALL FILTERS"/>
            <label htmlFor="sort-by">Sort by:</label>
            <select name="" id="sort-by">
                <option value="">Popular asc</option>
                <option value="">Popular desc</option>
                <option value="">Vote average asc</option>
                <option value="">Vote average desc</option>
            </select>
            <label htmlFor="rel-date">Release date:</label>
            <select name="" id="rel-date">
                <option value="">Popular asc</option>
                <option value="">Popular desc</option>
                <option value="">Vote average asc</option>
                <option value="">Vote average desc</option>
            </select>
            <ul className={classes.Genres}>Choose genre:
                <li>
                    <input type="checkbox" id="genre"/>
                    <label htmlFor="genre">genre</label>
                </li>
            </ul>
        </form>
    )
}

export default Filters;
