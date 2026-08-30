import "./Playlist.css";

import songs from "../Song";

import { Play } from "lucide-react";


function Playlist({
    isPlaying,
    setIsPlaying,
    setSelectedSong,
    setSelectedPlaylist,
    setSelectedIndex
}) {

    return (
        <>
            <div className="playlist-section">

                {/* Playlist Header */}

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


                {/* Playlist Cards */}

                <div className="playlist-cards">

                    {songs.map((playlist, index) => (

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

                                        setSelectedPlaylist(playlist);

                                        setSelectedIndex(index);

                                        setSelectedSong(playlist.song);

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