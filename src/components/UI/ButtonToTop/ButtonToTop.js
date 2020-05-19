import React from 'react';

import ScrollUpButton from "react-scroll-up-button";

const ButtonToTop = (props) => {
    return (
        <div>
            <ScrollUpButton style={{
                    background: '#bd2130',
                    outline: 'none',
            }} />
        </div>
    )
}

export default ButtonToTop;
