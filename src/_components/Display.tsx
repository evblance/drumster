import React from 'react';
import EDrumKeys from '../_enums/EDrumKey';
import MDKeyToSnd from '../_maps/MDKeyToSnd';

interface DisplayProps {
    activeDrumpad: EDrumKeys | undefined,
}

const Display = (props: DisplayProps) => {
    const drumSoundVal: string =
        props.activeDrumpad && 
        MDKeyToSnd.get(Object(EDrumKeys)[props.activeDrumpad])!.replace(`-`, ` `).toUpperCase() ||
        `-`;
    return (
        <div id="display" className="display">
            <div className="last-hit">{drumSoundVal}</div>
        </div>
    );
}

export default Display;


