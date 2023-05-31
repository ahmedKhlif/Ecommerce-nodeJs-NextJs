import React from "react";
import dynamic from 'next/dynamic'
const DisTableCategories = dynamic(() =>
    import('@/components/disCatTable'), {
    loading: () => 'Loading...', ssr: false,
})
async function getProducts() {
    const res = await fetch(`http://localhost:3001/api/products`)
    const categories = await res.json();
    return categories;
}
const tableCategories = async () => {
    const categories = await getProducts();
    return (
        <div className="container mx-auto shadow p-4">
            <DisTableCategories categories={categories} />
        </div>
    )
}
export default tableCategories; 