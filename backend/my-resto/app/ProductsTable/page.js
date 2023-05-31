import React from "react";
import dynamic from 'next/dynamic'
const DisProductsTable = dynamic(() =>
    import('@/components/disProductsTable'), {
    ssr: false,
})
async function getProducts() {
    const res = await fetch(`https://my-resto-nodejs.vercel.app/api/products?timestamp=${new Date().getTime()}`)
    const products = await res.json();
    return products;
}
const tableProducts = async () => {
    const products = await getProducts();
    return (
        <div className="container mx-auto shadow p-4 ">
            <DisProductsTable products={products} />
        </div>
    )
}
export default tableProducts;