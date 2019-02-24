import React, { Component } from 'react';
import DrumGrid from './DrumGrid';
import Display from './Display';
import EDrumKeys from '../_enums/EDrumKey';

interface DrumMachineProps {}

interface DrumMachineState {
    lastDrumpad: EDrumKeys | undefined,
}

class DrumMachine extends Component<DrumMachineProps, DrumMachineState> {

    constructor(props: DrumMachineProps) {
        super(props);
        this.state = {
            lastDrumpad: undefined,
        };
        this.reportSoundTrigger = this.reportSoundTrigger.bind(this);
    }

    reportSoundTrigger(drumKey: EDrumKeys): void {
        this.setState({
            lastDrumpad: drumKey,
        });
    }

    render(): JSX.Element {
        return (
            <div id="drum-machine">
                <h1 className="app-title">Drum Machine</h1>
                <DrumGrid handleSoundTrigger={this.reportSoundTrigger} />
                <Display activeDrumpad={this.state.lastDrumpad} />
            </div>
        );
    }
}

export default DrumMachine;