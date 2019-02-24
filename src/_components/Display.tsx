import React from 'react';
import EDrumKeys from '../_enums/EDrumKey';

interface DisplayProps {
    activeDrumpad: EDrumKeys | undefined,
}

const Display = (props: DisplayProps) => {
    return (
        <div id="display" className="display">
            Hello from Display!
        </div>
    );
}

export default Display;


