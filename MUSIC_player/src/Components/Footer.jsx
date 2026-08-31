import "./Footer.css";

import { Headphones } from "lucide-react";

import {
    FaInstagram,
    FaFacebookF,
    FaTwitter
} from "react-icons/fa";

function Footer() {

    const scrollToSection = (className) => {

        document
            .querySelector(`.${className}`)
            ?.scrollIntoView({
                behavior: "smooth"
            });

    };


    return (
        <footer className="footer">

            <div className="footer-container">


                {/* Brand */}

                <div className="footer-brand">

                    <div className="footer-logo">

                        <Headphones />

                        <span>
                            VibeFlow
                        </span>

                    </div>

                    <p>
                        Feel every beat.
                        Music for every mood.
                    </p>

                </div>


                {/* Quick Links */}

                <div className="footer-links">

                    <h3>
                        Quick Links
                    </h3>

                    <span
                        onClick={() =>
                            scrollToSection("hero_outer_container")
                        }
                    >
                        Home
                    </span>

                    <span
                        onClick={() =>
                            scrollToSection("player-main-container")
                        }
                    >
                        Discover
                    </span>

                    <span
                        onClick={() =>
                            scrollToSection("playlist-section")
                        }
                    >
                        Playlists
                    </span>

                    <span
                        onClick={() =>
                            scrollToSection("artists-section")
                        }
                    >
                        Artists
                    </span>

                </div>


                {/* Explore */}

                <div className="footer-links">

                    <h3>
                        Explore
                    </h3>

                    <span>
                        New Music
                    </span>

                    <span>
                        Popular Songs
                    </span>

                    <span>
                        Top Artists
                    </span>

                    <span>
                        Your Playlists
                    </span>

                </div>


                {/* Social */}

                <div className="footer-social">

                    <h3>
                        Follow Us
                    </h3>

                    <p>
                        Stay connected with VibeFlow.
                    </p>

                    <div className="social-icons">

                        <FaInstagram />

                        <FaFacebookF />

                        <FaTwitter />

                    </div>

                </div>

            </div>


            {/* Bottom */}

            <div className="footer-bottom">

                <p>
                    © 2026 VibeFlow. All rights reserved.
                </p>

                <p>
                    Made with ♪ for music lovers.
                </p>

            </div>

        </footer>
    );
}


export default Footer;