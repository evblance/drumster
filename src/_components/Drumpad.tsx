import React, { Component } from 'react';
import EDrumSound from '../_enums/EDrumSound';
import EDrumKeys from '../_enums/EDrumKey';
import MDSndToSrc from '../_maps/MDSoundToSrc';
import MDKeyToSnd from '../_maps/MDKeyToSnd';

interface DrumpadProps {
    drumKey: EDrumKeys,
    title: string,
    sound: EDrumSound,
    onSoundTrigger: Function,
}

interface DrumpadState {}

class Drumpad extends Component<DrumpadProps, DrumpadState> {

    audioRef: any;
    keypressListener: any;

    constructor(props: DrumpadProps) {
        super(props);
        this.state = {};
        this.audioRef = React.createRef();
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount(): void {
        this.keypressListener = document.addEventListener('keypress', (event: KeyboardEvent) => {
            if (MDKeyToSnd.get(event.key) === this.props.sound) {
                this.playSound();
            }
        });
    }

    componentWillUnmount(): void {
        document.removeEventListener('keypress', this.keypressListener);
    }

    playSound(): void {
        this.audioRef.current.currentTime = 0;
        this.audioRef.current.play();
        this.props.onSoundTrigger(this.props.drumKey);
    }

    handleKeyPress(event: any): void {
        if (MDSndToSrc.has(event.target.value)) {
            this.playSound();
        }
    }

    render(): JSX.Element {
        return (
            <div
                id={this.props.sound}
                className="drum-pad"
                onClick={this.playSound}
                onKeyPress={this.handleKeyPress}
            >
                { this.props.title }
                <audio id={this.props.title} ref={this.audioRef} className="clip" src={MDSndToSrc.get(this.props.sound)} />
            </div>
        );
    }
}

export default Drumpad;