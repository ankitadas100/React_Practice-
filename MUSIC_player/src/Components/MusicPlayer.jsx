import "./MusicPlayer.css";
import DriveImage from "../assets/Drive-image.jpg";
import song from "../assets/music/Rabba.mp3";

import {
    SkipBack,
    Play,
    Pause,
    SkipForward
} from "lucide-react";

import { FaVolumeUp } from "react-icons/fa";

import { useRef, useState, useEffect } from "react";


function MusicPlayer({ isPlaying, setIsPlaying, selectedSong, selectedPlaylist }) {

    const audioRef = useRef(null);

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    useEffect(() => {

        if (selectedSong && audioRef.current) {

            audioRef.current.load();

            audioRef.current.play();

            setIsPlaying(true);

        }

    }, [selectedSong]);


    const handlePlay = () => {

        if (isPlaying) {

            audioRef.current.pause();
            setIsPlaying(false);

        } else {

            audioRef.current.play();
            setIsPlaying(true);

        }

    };


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

                <div className="player-image">

                    <img
                        src={selectedPlaylist?.image || DriveImage}
                        alt="cover"
                    />

                </div>


                <h1 className="Player-heading">
                    {selectedPlaylist?.title || "Midnight Drive"}
                    <br />
                    VibeFlow Artist
                </h1>


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


                {/* AUDIO */}

                <audio
                    ref={audioRef}
                    src={selectedSong || song}
                    preload="metadata"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                />

            </div>

        </>
    );
}


export default MusicPlayer;