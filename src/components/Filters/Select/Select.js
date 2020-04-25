import React from 'react';

import '../Filters.module.css';

const Select = (props) => {
    const { name, options, changed } = props;

    return (
        <label>{name}
            <select name={name} onChange={changed} defaultValue="select">
                <option value="select" disabled>Select option...</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </label>
    )
}

export default Select;
