import React, { Component } from 'react';
import EDrumSound from '../_enums/EDrumSound';

interface DrumpadProps {
    title: string,
    sound: EDrumSound,
}

interface DrumpadState {

}

const MDSndToSrc: Map<EDrumSound, string> = new Map<EDrumSound, string>([
    [EDrumSound.CRASH_CYMBAL, `../_assets/sounds/${EDrumSound.CRASH_CYMBAL}`],
    [EDrumSound.RIDE_CYMBAL, `../_assets/sounds/${EDrumSound.RIDE_CYMBAL}`],
    [EDrumSound.HIGH_HAT_OPEN, `../_assets/sounds/${EDrumSound.HIGH_HAT_OPEN}`],
    [EDrumSound.FLOOR_TOM, `../_assets/sounds/${EDrumSound.FLOOR_TOM}`],
    [EDrumSound.LOW_TOM, `../_assets/sounds/${EDrumSound.LOW_TOM}`],
    [EDrumSound.HIGH_TOM, `../_assets/sounds/${EDrumSound.HIGH_TOM}`],
    [EDrumSound.BASS_DRUM, `../_assets/sounds/${EDrumSound.BASS_DRUM}`],
    [EDrumSound.SNARE_DRUM, `../_assets/sounds/${EDrumSound.SNARE_DRUM}`],
    [EDrumSound.HIGH_HAT_CLOSED, `../_assets/sounds/${EDrumSound.HIGH_HAT_CLOSED}`],
]);

class Drumpad extends Component<DrumpadProps, DrumpadState> {

    constructor(props: DrumpadProps) {
        super(props);
        this.state = {};
        this.playSound = this.playSound.bind(this);
    }

    playSound(): void {
        console.log('Playing sound');
        const element: HTMLAudioElement = document.getElementById(this.props.title) as HTMLAudioElement;
    }

    render() {
        return (
            <div
                id={this.props.sound}
                className="drum-pad"
                onClick={this.playSound}
            >
                { this.props.title }
                <audio id={this.props.title} className="clip" src={MDSndToSrc.get(this.props.sound)} />
            </div>
        );
    }
}

export default Drumpad;