import "./Playlist.css";
import song from "../assets/music/Rabba.mp3";

import ChillImage from "../assets/chill.jfif";
import FocusImage from "../assets/focus.jfif";
import RoadImage from "../assets/roadtrip.jfif";
import RomanticImage from "../assets/romantic.jfif";

import { Play } from "lucide-react";


function Playlist({ isPlaying, setIsPlaying, setSelectedSong, setSelectedPlaylist }) {

    const playlists = [
        {
            title: "Chill Vibes",
            songs: "12 Songs",
            image: ChillImage,
            song: song
        },
        {
            title: "Focus Time",
            songs: "18 Songs",
            image: FocusImage,
            song: song
        },
        {
            title: "Road Trip",
            songs: "20 Songs",
            image: RoadImage,
            song: song
        },
        {
            title: "Romantic Hits",
            songs: "15 Songs",
            image: RomanticImage,
            song: song
        }
    ];


    return (
        <>
            <div className="playlist-section">



                <div className="playlist-header">

                    <span className="playlist-subtitle">
                        YOUR VIBES
                    </span>

                    <h2 className="playlist-heading-main">
                        Playlists for you
                    </h2>

                    <p className="playlist-para">
                        Discover playlists that match your mood
                    </p>

                </div>




                <div className="playlist-cards">

                    {playlists.map((playlist, index) => (

                        <div
                            className="playlist-card"
                            key={index}
                        >

                            <div className="playlist-card-image">

                                <img
                                    className="playlist-image"
                                    src={playlist.image}
                                    alt={playlist.title}
                                />

                                <button
                                    className="playlist-play-btn"
                                    type="button"
                                    onClick={() => {
                                        setSelectedSong(null);
                                        setSelectedPlaylist(playlist);
                                        setTimeout(() => {
                                            setSelectedSong(playlist.song);
                                        }, 0);
                                    }}
                                >
                                    <Play />
                                </button>

                            </div>


                            <h3 className="playlist-heading">
                                {playlist.title}
                            </h3>


                            <span className="playlist-span">
                                {playlist.songs}
                            </span>

                        </div>

                    ))}

                </div>

            </div>
        </>
    );
}


export default Playlist;