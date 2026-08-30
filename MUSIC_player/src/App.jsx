import { useState, useEffect } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import MusicPlayer from "./Components/MusicPlayer";
import Playlist from "./Components/Playlist";
import songs from "./Song";


function App() {

    const [isPlaying, setIsPlaying] = useState(false);

    const [selectedSong, setSelectedSong] = useState(null);

    const [selectedPlaylist, setSelectedPlaylist] = useState(null);

    const [selectedIndex, setSelectedIndex] = useState(0);


    useEffect(() => {

        setSelectedSong(songs[selectedIndex].song);
         setSelectedPlaylist(songs[selectedIndex]);

    }, [selectedIndex]);


    return (
        <>
            <Navbar />

            <Hero />

            <MusicPlayer
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                selectedSong={selectedSong}
                selectedPlaylist={selectedPlaylist}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
            />

            <Playlist
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setSelectedSong={setSelectedSong}
                setSelectedPlaylist={setSelectedPlaylist}
                setSelectedIndex={setSelectedIndex}
            />
        </>
    );
}


export default App;