import React, { Suspense } from "react";
import ProductList from '@/components/productList';
import CategoryList from '@/components/categoryList';
async function getProducts() {
    const res = await fetch(`http://localhost:3001/api/products?timestamp=${new Date().getTime()}`)
    const products = await res.json();
    return products;
}
async function getCategries() {
    const res = await fetch(`http://localhost:3001/api/categories?timestamp=${new Date().getTime()}`)
    const categories = await res.json();
    return categories;
}
const ProductsPage = async () => {
    const products = await getProducts();
    const categories = await getCategries();
    return (
        <>
            <Suspense fallback={<p>Loading Categories...</p>}>
                <CategoryList categories={categories} />
            </Suspense>
            <Suspense fallback={<p>Loading Products...</p>}>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                    <div className="row">
                        <h1 className='ffasc text-center text-secondary'>Check Our<span className='red'> Yummy Menu</span></h1>
                {products?.map((product) => (
                    <ProductList product={product} />
                ))}
                 </div>
                </div>
            </section>
            </Suspense>

        </>
    )
}
export default ProductsPage; 