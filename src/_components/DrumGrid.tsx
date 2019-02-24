import React from 'react';
import Drumpad from './Drumpad';
import EDrumKeys from '../_enums/EDrumKey';
import MDKeyToSnd from '../_maps/MDKeyToSnd';

interface DrumGridProps {}

const DrumGrid = (props: DrumGridProps) => {
    return (
        <div className="drum-grid">
            {
                Object.keys(EDrumKeys).map(
                    (k: any, idx: number) => {
                        return (
                            <Drumpad
                                key={idx}
                                drumKey={k}
                                title={EDrumKeys[k].toUpperCase()}
                                sound={MDKeyToSnd.get(EDrumKeys[k])!} />
                        )
                    }
                )
            }
        </div>
    );
}

export default DrumGrid;


