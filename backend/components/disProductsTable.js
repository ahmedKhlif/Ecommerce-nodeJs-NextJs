"use client";
import React from 'react';
import MUIDataTable from "mui-datatables";
import AddProducts from './addProducts';
import UpdateProduct from './UpdateProducts';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
const disProductsTable = ( props ) => {
    const [products, setProducts] = React.useState(props.products)
    const getProducts = async () => {
        const res = await fetch('http://localhost:3001/api/products')
        const products = await res.json();
        setProducts(products)
    }
    React.useEffect(() => {
        getProducts();

    }, [products]);
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure to delete the product?")) {
            console.log(id)
            const res = await (await
                fetch('http://localhost:3001/api/products/' + id, {
                    method: "DELETE"
                })).json();
            if (res) {
                const newProd = products.filter((item) => item.id !== id);
                setProducts(newProd);

            } else {
                console.log(res);
            }
        }
    }
    const columns = [
        {
            label: "Name",
            name: "designation"
        },
        {
            label: "Price",
            name: "price"
        },
        {
            label: "Image",
            name: "productImg",
            options: {
                customBodyRender: (rowdata) => (
                    <img
                        style={{ height: 85, width: 75, borderRadius: '10%' }}
                        src={`${rowdata}`}
                        alt=""
                    />
                )
            }
        },
        {
            name: "_id",
            label: "Actions",
            options: {
                customBodyRender: (value, tableMeta) => (
                    <div>
                        
                        <UpdateProduct products={products[tableMeta.rowIndex]} />

                        <span
                            onClick={(e) => handleDelete(value)}
                            style={{ cursor: 'pointer' }}
                        >
                            <ClearRoundedIcon sx={{ color: '#EA5E59' }} />
                        </span>
                    </div>
                )
            }
        }
    ];
    return (
        <>
        <AddProducts />
            {products && products?.length > 0 ?

                <MUIDataTable
                    title="Products List"
                    data={products}
                    columns={columns}
                />

                : null}
        </>
    )
}
export default disProductsTable; 