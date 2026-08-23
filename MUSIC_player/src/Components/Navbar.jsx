import { Headphones, Search } from "lucide-react";
import "./Navbar.css";
function Navbar() {
    return (<>
        <div className="outer_container">
            <div className="logo">
                <Headphones />
                <span>VibeFlow</span>
            </div>
            <div className="main_Container">
                <div className="sub_container">
                    <span>Home</span>
                    <span>Discover</span>
                    <span>Playlists</span>
                    <span>Artists</span>
                    <Search className="search_icon" />

                </div>
            </div>
        </div>
    </>)
}
export default Navbar;