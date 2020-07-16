import React from 'react';
import ProgressBar from 'react-customizable-progressbar';

import './Progressbar.css';

const Progressbar = (props) => {
    const { progress, radius, strokeWidth, trackWidth } = props

    return (
        <ProgressBar
            radius={radius}
            progress={progress}
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
            strokeColor="#5d9cec"
            trackStrokeWidth={trackWidth}
            trackStrokeColor="#ccd3d9"
            initialAnimation={true}
            initialAnimationDelay={30}>
                <div className="Indicator">
                    {progress}%
                </div>
        </ProgressBar>
    )
}

export default Progressbar;
