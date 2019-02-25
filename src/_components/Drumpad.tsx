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

interface DrumpadState {
    bPressed: boolean,
}

class Drumpad extends Component<DrumpadProps, DrumpadState> {

    audioRef: any;
    keypressListener: any;

    constructor(props: DrumpadProps) {
        super(props);
        this.state = {
            bPressed: false,
        };
        this.audioRef = React.createRef();
        this.playSound = this.playSound.bind(this);
        this.lightUp = this.lightUp.bind(this);
    }

    componentDidMount(): void {
        // Register an event listener so we can trigger the correct drumpad sound on key presses
        this.keypressListener = document.addEventListener('keypress', (event: KeyboardEvent) => {
            if (MDKeyToSnd.get(event.key) === this.props.sound) {
                this.playSound();
                this.lightUp();
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

    // Handles the illumination of the drumpad based on keypress (pure CSS handles it for clicks)
    lightUp(): void {
        this.setState({
            bPressed: true,
        }, () => {
            setTimeout(() => {
                this.setState({
                    bPressed: false,
                })
            }, 100);
        });
    }

    render(): JSX.Element {
        return (
            <div
                id={this.props.sound}
                className={this.state.bPressed ? `drum-pad hit` : `drum-pad`}
                onClick={this.playSound}
            >
                { this.props.title }
                <audio id={this.props.title} ref={this.audioRef} className="clip" src={MDSndToSrc.get(this.props.sound)} />
            </div>
        );
    }
}

export default Drumpad;