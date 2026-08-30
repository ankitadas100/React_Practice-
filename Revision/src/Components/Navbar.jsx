import { useContext } from "react";
import CartContext from "./CartContext";
import "./Navbar.css"
function Navbar(){
    const CartData = useContext(CartContext);
    return(<>
    <nav className="Navbar">
            <h2 className="Navbar-logo">My Shop</h2>

            <div className="Navbar-cart">
                🛒 Cart: {CartData.cart.length}
            </div>
        </nav>
    </>)
}
export default Navbar;