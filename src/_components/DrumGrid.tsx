import React, { Component } from 'react';
import Drumpad from './Drumpad';
import EDrumKeys from '../_enums/EDrumKey';
import MDKeyToSnd from '../_maps/MDKeyToSnd';

interface DrumGridProps {
    handleSoundTrigger: Function,
}

interface DrumGridState {}

class DrumGrid extends Component<DrumGridProps, DrumGridState> {

    constructor(props: DrumGridProps) {
        super(props);
        this.onSoundTrigger = this.onSoundTrigger.bind(this);
    }

    onSoundTrigger(drumKey: EDrumKeys): void {
        this.props.handleSoundTrigger(drumKey);
    }

    render(): JSX.Element {
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
                                    sound={MDKeyToSnd.get(EDrumKeys[k])!}
                                    onSoundTrigger={this.onSoundTrigger} />
                            )
                        }
                    )
                }
            </div>
        );
    }
}

export default DrumGrid;


