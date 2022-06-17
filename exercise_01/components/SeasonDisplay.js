import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        icon: 'sun',
    },
    winter: {
        text: 'Burr, its chilly!',
        icon: 'snowflake',
    },
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, icon } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left icon massive ${icon}`}></i>
            <h1>{text}</h1>
            <i className={`icon-right icon massive ${icon}`}></i>
        </div>
    );
};

export default SeasonDisplay;
