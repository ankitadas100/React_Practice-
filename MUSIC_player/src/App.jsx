import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import MusicPlayer from "./Components/MusicPlayer";
import Playlist from "./Components/Playlist";

function App() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedSong, setSelectedSong] = useState(null);
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);

    return (
        <>
            <Navbar />

            <Hero />

            <MusicPlayer
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                selectedSong={selectedSong}
                 selectedPlaylist={selectedPlaylist}
            />

            <Playlist
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setSelectedSong={setSelectedSong}
                  setSelectedPlaylist={setSelectedPlaylist}
            />
        </>
    );
}

export default App;