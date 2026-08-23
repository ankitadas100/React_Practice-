import Graphic_image from "../assets/Graphic_image.png"
import "./Hero.css"
function Hero() {
    return (<>
        <div className=" hero_outer_container">
            <div className="mainbox">
                <div className="head"> FEEL EVERY BEAT </div>
                <span className="subhead">  Music for </span>
                <span className="subhead">    every mood.  </span>
                <p className="des"> Discover your favorite songs,</p>
                <p className="des">artists and playlists.</p>
                <div className="end"> [ ▶ Start Listening ]  </div>
            </div>
            <div className="hero_image">
                <img src={Graphic_image} alt="Music" />

            </div>
        </div>
    </>)
}
export default Hero;