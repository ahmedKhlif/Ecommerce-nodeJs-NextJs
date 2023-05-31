"use client";
import { useState } from "react";
import CartItem from "./CartItem";
import { useShoppingCart } from "use-shopping-cart";
import axios from "axios";
export default function ShoppingCart() {
    const { shouldDisplayCart, cartCount, cartDetails, totalPrice } = useShoppingCart();

    const [status, setStatus] = useState("idle");
    async function handleClick(event) {
        const items = Object.values(cartDetails)
        event.preventDefault();
        if (cartCount > 0) {
            setStatus("loading");
            try {
                axios.post('api/checkout_sessions', items)
                    .then(res => {
                        console.log(res);
                        window.location = res.data.sessionURL;
                    })
                    .catch(err => { console.log(err); setStatus("redirect-error"); })
            } catch (error) {
                console.error(error);
                setStatus("redirect-error");
            }
        } else {
            setStatus("no-items");
        }
    }

    return (

        <div style={{ boxShadow: "0 0.5px 15px 0 rgba(0, 0, 0, 0.15)" }}
            className={
                `shoppingcart bg-light text-dark p-4 rounded position-absolute top-100 end-0 me-4 text-center
                 ${shouldDisplayCart ? "opacity-100" : "opacity-0"
                }`}
        >
            <span className="text">Total : </span>{totalPrice.toFixed(2)} dt
            {cartCount && cartCount > 0 ? (
                <>
                    {Object.values(cartDetails ?? {}).map((entry) => (
                        <CartItem key={entry.id} item={entry} />
                    ))}
                    <article className="mt-3 flex flex-col">
                        <div className="text-danger">
                            {
                                cartCount && cartCount > 20
                                    ? "You cannot have more than 20 items"
                                    : status === "redirect-error"
                                        ? "Unable to redirect to Stripe checkout page"
                                        : status === "no-items"
                                            ? "Please add some items to your cart"
                                            : null}
                        </div>
                        <button
                            onClick={handleClick}
                            className="btn text-light bg-dark"
                            disabled={
                                (cartCount && cartCount > 20) ||
                                    status == "no-items"
                                    ? true
                                    : false
                            }
                        >
                            {status !== "loading" ? "Proceed to checkout" : "Loading..."}
                        </button>
                    </article>
                </>
            ) : (
                <div className="p-5 text-center">You have no items in your cart</div>
            )}
        </div>

    );
} 