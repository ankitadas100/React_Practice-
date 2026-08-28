import "./Playlist.css";
import ChillImage from "../assets/chill.jfif";
import FocusImage from "../assets/focus.jfif";
import  RoadImage from "../assets/roadtrip.jfif";
import RomanticImage from "../assets/romantic.jfif";

function Playlist() {
    return (
        <>
            <div className="playlist-section">

                <div className="playlist-header">
                    <span className="playlist-subtitle">
                        YOUR VIBES
                    </span>

                    <h2 className="playlist-header">
                        Playlists for you
                    </h2>

                    <p className="playlist-para">
                        Discover playlists that match your mood
                    </p>
                </div>


                <div className="playlist-cards">

                    <div className="playlist-card">
                        <div className="playlist-card-image">
                            <img  className="playlist-image" src={ChillImage} alt="Chill Vibes" />
                        </div>

                        <h3 className="playlist-heading">Chill Vibes</h3>

                        <span className="playlist-span">12 Songs</span>
                    </div>


                    <div className="playlist-card">
                        <div className="playlist-card-image">
                            <img  className="playlist-image"src={FocusImage} alt="Focus Time" />
                        </div>

                        <h3 className="playlist-heading">Focus Time</h3>

                        <span  className="playlist-span">18 Songs</span>
                    </div>


                    <div className="playlist-card">
                        <div className="playlist-card-image">
                            <img  className="playlist-image"src={RoadImage} alt="Road Trip" />
                        </div>

                        <h3 className="playlist-heading">Road Trip</h3>

                        <span className="playlist-span">20 Songs</span>
                    </div>


                    <div className="playlist-card">
                        <div className="playlist-card-image">
                            <img  className="playlist-image" src={RomanticImage} alt="Romantic Hits" />
                        </div>

                        <h3  className="playlist-heading">Romantic Hits</h3>

                        <span className="playlist-span">15 Songs</span>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Playlist;