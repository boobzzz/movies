import React from 'react';

const Select = (props) => {
    const { name, options, changed, selectValue } = props;

    return (
        <label>{name}
            <select
                name={name}
                onChange={changed}
                value={selectValue}>
                <option value="default" disabled>Select option...</option>
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
