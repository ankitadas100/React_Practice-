import "./MusicPlayer.css";

import DriveImage from "../assets/Drive-image.jpg";

import {
    SkipBack,
    Play,
    Pause,
    SkipForward
} from "lucide-react";

import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

import { useRef, useState, useEffect } from "react";

import songs from "../Song";


function MusicPlayer({
    isPlaying,
    setIsPlaying,
    selectedSong,
    selectedPlaylist,
    selectedIndex,
    setSelectedIndex
}) {

    const audioRef = useRef(null);

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);




    useEffect(() => {

        if (selectedSong && audioRef.current) {

            audioRef.current.load();

            setCurrentTime(0);

            audioRef.current.play();

            setIsPlaying(true);

        }

    }, [selectedSong]);


    // Play / Pause

    const handlePlay = () => {

        if (isPlaying) {

            audioRef.current.pause();

            setIsPlaying(false);

        } else {

            audioRef.current.play();

            setIsPlaying(true);

        }

    };


    // Next song

    const handleNext = () => {

        if (selectedIndex < songs.length - 1) {

            setSelectedIndex(selectedIndex + 1);

        }

    };
    const handleSongEnd = () => {

        if (selectedIndex < songs.length - 1) {
            setSelectedIndex(selectedIndex + 1);
        } else {
            setIsPlaying(false);
        }

    };


    // Previous song

    const handlePrevious = () => {

        if (selectedIndex > 0) {

            setSelectedIndex(selectedIndex - 1);

        }

    };


    // Current time

    const handleTimeUpdate = () => {

        setCurrentTime(audioRef.current.currentTime);

    };


    // Song duration

    const handleLoadedMetadata = () => {

        setDuration(audioRef.current.duration);

    };


    // Format time

    const formatTime = (time) => {

        const minutes = Math.floor(time / 60);

        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds
            .toString()
            .padStart(2, "0")}`;

    };


    // Progress bar

    const handleProgressChange = (e) => {

        const newTime = Number(e.target.value);

        audioRef.current.currentTime = newTime;

        setCurrentTime(newTime);

    };
    const handleVolumeChange = (e) => {

        const newVolume = Number(e.target.value);

        setVolume(newVolume);

        audioRef.current.volume = newVolume;

    };
    const handleMute = () => {

        if (isMuted) {

            audioRef.current.volume = volume;
            setIsMuted(false);

        } else {

            audioRef.current.volume = 0;
            setIsMuted(true);

        }

    };


    return (
        <>

            <div className="player-main-container">


                {/* Album Image */}

                <div className="player-image">

                    <img
                        src={selectedPlaylist?.image || DriveImage}
                        alt="cover"
                    />

                </div>


                {/* Song Information */}

                <h1 className="Player-heading">

                    {selectedPlaylist?.title || "Midnight Drive"}

                    <br />

                    {selectedPlaylist?.artist || "VibeFlow Artist"}

                </h1>


                {/* Player Controls */}

                <div className="player-controls">


                    {/* Previous */}

                    <button
                        type="button"
                        className="play-btn"
                        onClick={handlePrevious}
                    >

                        <SkipBack />

                    </button>


                    {/* Play / Pause */}

                    <button
                        type="button"
                        className="play-button"
                        onClick={handlePlay}
                    >

                        {isPlaying ? (
                            <Pause />
                        ) : (
                            <Play />
                        )}

                    </button>


                    {/* Next */}

                    <button
                        type="button"
                        className="play-skipbtn"
                        onClick={handleNext}
                    >

                        <SkipForward />

                    </button>


                </div>


                {/* Progress */}

                <div className="progress-container">


                    {/* Volume */}

                    <button
                        type="button"
                        className="volume-button"
                        onClick={handleMute}
                    >
                        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                    </button>


                    {/* Current Time */}

                    <span className="time-btn">

                        {formatTime(currentTime)}

                    </span>


                    {/* Progress Bar */}

                    <input
                        type="range"
                        className="progress-bar"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleProgressChange}
                    />


                    {/* Duration */}

                    <span className="time-btn">

                        {formatTime(duration)}

                    </span>


                </div>


                {/* Audio */}

                <audio
                    ref={audioRef}
                    src={selectedSong}
                    preload="metadata"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={handleSongEnd}
                />

            </div>

        </>
    );
}


export default MusicPlayer;