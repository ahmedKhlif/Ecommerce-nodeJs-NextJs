"use client";
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useShoppingCart } from "use-shopping-cart";
const Success = () => {

    const { clearCart } = useShoppingCart();
    useEffect(() => {
        clearCart();
    }, []);
    return (
        <div className=''>
            <div className='text-center'>
                <h1 className='mt-5'>Thank You</h1>
                <p className='text-center'>Order Placed Successfully</p>
                <Link href="/products">
                    <p className='btn btn-danger text-light'>Continue Shopping</p>
                </Link>
            </div>
        </div>
    )
}
export default Success