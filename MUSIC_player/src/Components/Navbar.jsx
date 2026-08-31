import { useState } from "react";
import { Headphones, Search } from "lucide-react";
import "./Navbar.css";
import songs from "../Song";

function Navbar({ setSelectedSong }) {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
 const searchResults = songs.filter((item) => {

    const search = searchText.toLowerCase();

    const title = (item.title || "").toLowerCase();
    const artist = (item.artist || "").toLowerCase();
    const songName = (item.songName || "").toLowerCase();

    return (
        title.includes(search) ||
        artist.includes(search) ||
        songName.includes(search)
    );

});

    const scrollToSection = (className) => {

        document
            .querySelector(`.${className}`)
            ?.scrollIntoView({
                behavior: "smooth"
            });

    };


    return (
        <>
            <div className="outer_container">

                <div className="logo">
                    <Headphones />
                    <span>VibeFlow</span>
                </div>


                <div className="main_Container">

                    <div className="sub_container">

                        <span
                            onClick={() => scrollToSection("hero_outer_container")}
                        >
                            Home
                        </span>


                        <span
                            onClick={() => scrollToSection("player-main-container")}
                        >
                            Discover
                        </span>


                        <span
                            onClick={() => scrollToSection("playlist-section")}
                        >
                            Playlists
                        </span>


                        <span
                            onClick={() => scrollToSection("artists-section")}
                        >
                            Artists
                        </span>




                        {searchOpen && (
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search music..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        )}
                        {searchText && (
    <div className="search-results">

        {searchResults.length > 0 ? (

            searchResults.map((item, index) => (

                <div
    className="search-result-item"
    key={index}
    onClick={() => {
        setSelectedSong(item.song);
        setSearchText("");
        setSearchOpen(false);
    }}
>

                   <span>
    {item.songName}
</span>

<small>
    {item.title} • {item.artist}
</small>

                </div>

            ))

        ) : (

            <p className="no-results">
                No results found
            </p>

        )}

    </div>
)}

                        <button
                            type="button"
                            className="search-button"
                            onClick={() => setSearchOpen(!searchOpen)}
                        >
                            <Search className="search_icon" />
                        </button>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Navbar;