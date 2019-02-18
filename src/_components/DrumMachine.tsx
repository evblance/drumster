import React from 'react';
import DrumGrid from './DrumGrid';
import Display from './Display';

interface DrumMachineProps { }

const DrumMachine = (props: DrumMachineProps) => {
    return (
        <div id="drum-machine">
            <h1 className="app-title">Drum Machine</h1>
            <DrumGrid />
            <Display />
        </div>
    );
}

export default DrumMachine;