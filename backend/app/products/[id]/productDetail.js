import React from 'react'
import { notFound } from "next/navigation";
async function getProductDetails(id) {
    try {
        const res = await fetch
            (`http://localhost:3001/api/products/${id}?timestamp=${new Date().getTime()}`);
        const product = await res.json();
        return product;
    }
    catch (error) {
        console.log(error);
    }
}

const ProductDetails = async ({ params }) => {

    const product = await getProductDetails(params.id)
    if (!product) notFound();

    return (
        <div className="container-fluid w-50 p-1 bg-light rounded card-details">
            <div className="row ">
                <div className="col col-5">
                    <img
                        src={product.productImg}
                        className="img-fluid rounded m-2"
                        alt={product.designation}
                    />
                </div>
                <div className="col-7 align-items-center text-center">
                    <h2 className="my-4 text red">{product.designation}</h2>
                    <h6 className="my-4 text fs-4 red">{product.categoryID.categoryName}</h6>
                    <h3 className="my-4 text red">{product.price} DT</h3>
                    <div row>
                        <div className="flex justify-around items-center mt-4 mb-2 ">
                          
                        </div>
                        <img src='/images/food-package.png' width={70} height={70} className='food-delivery'></img>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ProductDetails 
