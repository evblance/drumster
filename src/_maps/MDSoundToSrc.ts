import EDrumSound from "../_enums/EDrumSound";

const MDSndToSrc: Map<EDrumSound, string> = new Map<EDrumSound, string>([
    [EDrumSound.CRASH_CYMBAL, `${process.env.PUBLIC_URL}/sounds/${EDrumSound.CRASH_CYMBAL}.wav`],
    [EDrumSound.RIDE_CYMBAL, `${process.env.PUBLIC_URL}/sounds/${EDrumSound.RIDE_CYMBAL}.wav`],
    [EDrumSound.HIGH_HAT_OPEN, `${process.env.PUBLIC_URL}/sounds/${EDrumSound.HIGH_HAT_OPEN}.wav`],
    [EDrumSound.FLOOR_TOM, `${process.env.PUBLIC_URL}/sounds/${EDrumSound.FLOOR_TOM}.wav`],
    [EDrumSound.LOW_TOM, `${process.env.PUBLIC_URL}/sounds/${EDrumSound.LOW_TOM}.wav`],
    [EDrumSound.HIGH_TOM, `${process.env.PUBLIC_URL}/sounds/${EDrumSound.HIGH_TOM}.wav`],
    [EDrumSound.BASS_DRUM, `${process.env.PUBLIC_URL}/sounds/${EDrumSound.BASS_DRUM}.wav`],
    [EDrumSound.SNARE_DRUM, `${process.env.PUBLIC_URL}/sounds/${EDrumSound.SNARE_DRUM}.wav`],
    [EDrumSound.HIGH_HAT_CLOSED, `${process.env.PUBLIC_URL}/sounds/${EDrumSound.HIGH_HAT_CLOSED}.wav`],
]);

export default MDSndToSrc;