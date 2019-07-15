import React from 'react';

import './Characteristic.css';

export default ({ label, definition, font }) => (
    <div id="characteristic">
        <div className="characteristic_wrapper">
            <h1>{label}</h1>
            <p>{definition}</p>
            <h2>{font}</h2>
        </div>
    </div>
)