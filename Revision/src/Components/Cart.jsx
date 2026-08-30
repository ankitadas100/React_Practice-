import { useContext } from "react";
import CartContext from "./CartContext"

import "./Cart.css"

function Cart() {
    const CartData = useContext(CartContext);
    const total=CartData.cart.reduce((
        total,item)=>total+(item.price*item.quantity),
        0
        );


    return (<>
    <div className="Cart-Container">
        {CartData.cart.map((products) => (
            <div  className="Cart-card"key={products.id}>
                <h1 className="Cart-heading">{products.name}</h1>
                <h2 className="Cart-header">{products.price}</h2>

                <button  className="Cart-btn"onClick={() =>
                    CartData.Setcart(
                        CartData.cart.map((item) =>
                            item.id === products.id
                                ? {
                                    ...item,
                                    quantity: item.quantity + 1
                                }
                                : item
                        )
                    )
                }>  [+] </button>
                <h3 className="Cart-quantity">quantity:{products.quantity}</h3>
                <button className="Cart-btn" onClick={() =>
                CartData.Setcart(
                    CartData.cart.map((item) =>
                        item.id === products.id ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                            : item
                    ))

                }>[-]</button>
                 


            </div>
           
        ))}
        <h2 className="Cart-total">total:{total}</h2>
        </div>
    </>)
}
export default Cart;