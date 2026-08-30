import { useContext } from "react";
import CartContext from "./CartContext";
import "./Products.css"
function Products() {
    const CartData = useContext(CartContext);


    const products = [
        {
            id: 1,
            name: "Apple",
            price: 50,
        },
        {
            id: 2,
            name: "orange",
            price: 47,
        },
        {
            id: 3,
            name: "litchi",
            price: 70,
        }
    ]
    const addTocart = (products) => {
        const existingProduct = CartData.cart.find(
            (item) => item.id === products.id

        )

        if (existingProduct) {

            CartData.Setcart(
                CartData.cart.map((item) =>
                    item.id === products.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                )
            );

        } else {

            CartData.Setcart([
                ...CartData.cart,
                {
                    ...products,
                    quantity: 1
                }
            ])

        }

    }
    return (<>
    <div className="products-container">
        {products.map((products) => (
            <div  className="products-card" key={products.id}>
                <h1 className="products-heading">{products.name}</h1>
                <h2 className="products-header">{products.price}</h2>
               
                <button className="products-btn" onClick={() => addTocart(products)}>
                    ADD to Cart
                </button>
                <button  className="products-btn"onClick={() =>
                    CartData.Setcart(
                        CartData.cart.filter((item) => item.id !== products.id)
                    )
                }
                >
                    Remove
                </button>


            </div>
        ))}
            </div>

    </>)
}

export default Products;