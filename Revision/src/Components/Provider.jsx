import { useState } from "react";
import CartContext from "./CartContext";

function Provider({ children }) {

    const [cart, Setcart] = useState([]);

    return (
        <CartContext.Provider
            value={{
                cart,
                Setcart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default Provider;