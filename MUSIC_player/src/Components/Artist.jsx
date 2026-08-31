import "./Artist.css";

function Artists() {

    const artists = [
        {
            name: "Arijit Singh",
            genre: "Bollywood"
        },
        {
            name: "Atif Aslam",
            genre: "Pop"
        },
        {
            name: "Shreya Ghoshal",
            genre: "Bollywood"
        },
        {
            name: "Armaan Malik",
            genre: "Pop"
        }
    ];

    return (
        <>
            <div className="artists-section">

                <div className="artists-header">

                    <span className="artists-subtitle">
                        TOP ARTISTS
                    </span>

                    <h2 className="artists-heading">
                        Artists you may like
                    </h2>

                    <p className="artists-para">
                        Explore music from your favorite artists
                    </p>

                </div>


                <div className="artists-cards">

                    {artists.map((artist, index) => (

                        <div
                            className="artist-card"
                            key={index}
                        >

                            <div className="artist-image">
                                <div className="artist-placeholder">
                                    ♪
                                </div>
                            </div>

                            <h3 className="artist-name">
                                {artist.name}
                            </h3>

                            <span className="artist-genre">
                                {artist.genre}
                            </span>

                        </div>

                    ))}

                </div>

            </div>
        </>
    );
}

export default Artists;