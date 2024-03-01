import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './index.css'

const Player = () => (
    <AudioPlayer
        autoPlay
        src=""
        onPlay={e => console.log("onPlay")}
    
    />
);

export default Player;