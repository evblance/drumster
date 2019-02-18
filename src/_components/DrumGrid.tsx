import React from 'react';
import Drumpad from './Drumpad';
import EDrumKey from '../_enums/EDrumKey';
import EDrumSound from '../_enums/EDrumSound';

interface DrumGridProps {}

const MDKeyToSnd: Map<string, EDrumSound> = new Map<string, EDrumSound>([
    [EDrumKey.Q, EDrumSound.CRASH_CYMBAL],
    [EDrumKey.W, EDrumSound.RIDE_CYMBAL],
    [EDrumKey.E, EDrumSound.HIGH_HAT_OPEN],
    [EDrumKey.A, EDrumSound.FLOOR_TOM],
    [EDrumKey.S, EDrumSound.LOW_TOM],
    [EDrumKey.D, EDrumSound.HIGH_TOM],
    [EDrumKey.Z, EDrumSound.BASS_DRUM],
    [EDrumKey.X, EDrumSound.SNARE_DRUM],
    [EDrumKey.C, EDrumSound.HIGH_HAT_CLOSED],
]);

const DrumGrid = (props: DrumGridProps) => {
    return (
        <div className="drum-grid">
            {
                Object.keys(EDrumKey).map(
                    (k: any) => {
                        return (
                            <Drumpad
                                key={k}
                                title={EDrumKey[k].toUpperCase()}
                                sound={MDKeyToSnd.get(EDrumKey[k])!} />
                        )
                    }
                )
            }
        </div>
    );
}

export default DrumGrid;


