import React from 'react'
import CartProduct from './CartProduct';
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ cart }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout-ad" src="https://lh3.googleusercontent.com/proxy/nEAb9zugrMb5I-uXqo7pPyBBThMM17xN4qdSnfKs3I9IbWvbu8gbdInEb7ittke0Kw5bxhK5Zy3J4zhO1zejvGItZuakGxrSjh_uuZI7sHk-56bosryR_cVTkUxYp5gsNrE"></img>

            </div>
            <div>
                <h2 className="checkout-title">Your Shopping Cart</h2>

                {cart.map(item => (
                    <CartProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    />
                ))}
                {/* CartProduct */}
                {/* CartProduct */}
                {/* CartProduct */}
                {/* CartProduct */}
                {/* CartProduct */}


            </div>
            <div className="checkout-right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout

