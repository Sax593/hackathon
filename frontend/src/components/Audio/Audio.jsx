import AudioPlayer from "react-h5-audio-player";
import audio from "../../assets/voice.mp3";
import "react-h5-audio-player/lib/styles.css";
import "./style.css";

export default function Audio() {
  return (
    <div className="audioPlayer">
      <AudioPlayer
        src={audio}
        showDownloadProgress={false}
        showJumpControls={false}
        showSkipControls={false}
        showFilledVolume={false}
        showFilledProgress={false}
      />
    </div>
  );
}
