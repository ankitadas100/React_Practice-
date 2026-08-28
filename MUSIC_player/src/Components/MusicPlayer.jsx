import "./MusicPlayer.css";
import DriveImage from "../assets/Drive-image.jpg";

import {
    SkipBack,
    Play,
    Pause,
    SkipForward
} from "lucide-react";

import { FaVolumeUp } from "react-icons/fa";

import song from "../assets/music/Rabba.mp3";

import { useRef, useState } from "react";


function MusicPlayer() {

    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);



    const handlePlay = () => {

        if (isPlaying) {

            audioRef.current.pause();

            setIsPlaying(false);

        } else {

            audioRef.current.play();

            setIsPlaying(true);

        }

    };
    const [duration, setDuration] = useState(0);
    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };
    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };
    const handleProgressChange = (e) => {
    const newTime = Number(e.target.value);

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
};

    return (
        <>

            <div className="player-main-container">

                {/* Album Image */}

                <div className="player-image">

                    <img
                        src={DriveImage}
                        alt="cover"
                    />

                </div>


                {/* Song Information */}

                <h1 className="Player-heading">
                    Midnight Drive, VibeFlow Artist
                </h1>


                {/* Player Controls */}

                <div className="player-controls">

                    <button
                        type="button"
                        className="play-btn"
                    >
                        <SkipBack />
                    </button>


                    <button
                        type="button"
                        className="play-button"
                        onClick={handlePlay}
                    >
                        {isPlaying ? <Pause /> : <Play />}
                    </button>


                    <button
                        type="button"
                        className="play-skipbtn"
                    >
                        <SkipForward />
                    </button>

                </div>


               

                <div className="progress-container">

                   

                    <div className="volume-container">

                        <FaVolumeUp />

                    </div>


                    <span className="time-btn">
                        {formatTime(currentTime)}
                    </span>


                    <input
    type="range"
    className="progress-bar"
    min="0"
    max={duration}
    value={currentTime}
    onChange={handleProgressChange}
/>


                    <span className="time-btn">
                        {formatTime(duration)}
                    </span>

                </div>


                {/* Actual Audio */}

                <audio
                    ref={audioRef}
                    src={song}
                    preload="metadata"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                />

            </div>

        </>
    );
}


export default MusicPlayer;