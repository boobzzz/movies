import React from 'react';

const Button = (props) => {
    return (
        <button type="button" onClick={props.clicked}>
            Next {props.itemsPerPage}
        </button>
    )
}

export default Button;
