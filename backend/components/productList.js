"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useShoppingCart } from "use-shopping-cart";
import { Button } from '@mui/material';
import { useSession } from 'next-auth/react';

const ProductsPage = ({ product }) => {
    const { data } = useSession();
    const { addItem } = useShoppingCart();
    const [quantity, setQuantity] = useState(1);
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const addToCart = () => {
        addItem(product, { count: quantity });
        setQuantity(1);
    };

    return (
        <>
            <div
                key={product?._id}
                className="col-md-12 col-lg-3 mb-4 mb-lg-0 pt-4 "
            >
                <div className="card h-100">
                    <img
                        src={product.productImg}
                        className="card-img-top p-4 prod-img"
                        height={300}
                        width={100}
                        alt={product.designation}
                    />
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <p className="small cat kleeone">{product.categoryID.categoryName}</p>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <Link href={`/products/${product._id}`}>
                                <h5 className="mb-0 text color-desgin-prod">{product.designation}</h5>
                            </Link>
                            <h5 className="price text mb-0 ">{product.price} DT</h5>
                        </div>
                        {data?.user.name !== "Emna Abbes" && (
                            <div className="">
                                <button
                                    className="btn text-secondary"
                                    onClick={decreaseQuantity}
                                >
                                    -
                                </button>
                                <span className="w-10 text-center rounded-md mx-3 text-secondary">{quantity}</span>
                                <button
                                    className="btn text-secondary me-4"
                                    onClick={increaseQuantity}
                                >
                                    +
                                </button>
                                <Button className="btn" onClick={() => addToCart()}>
                                    <img src='/images/button-click.PNG' width={53} height={53} className='ms-5'></img>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductsPage;
