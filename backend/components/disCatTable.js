"use client";
import React from 'react';
import MUIDataTable from "mui-datatables";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import AddCategories from './addCategories';
import UpdateCategory from './updateCategory';

const disTableCategories = (props) => {
    const [categories, setCategories] = React.useState(props.categories)
    const getCategories = async () => {
        const res = await fetch('http://localhost:3001/api/categories')
        const categories = await res.json();
        setCategories(categories)
    }
    React.useEffect(() => {
        getCategories();

    }, [categories]);
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure to delete the category?")) {
            console.log(id)
            const res = await (await
                fetch('http://localhost:3001/api/categories/' + id, {
                    method: "DELETE"
                })).json();
            if (res) {
                const newCategories = categories.filter((item) => item.id !== id);
                setCategories(newCategories);

            } else {
                console.log(res);
            }
        }
    }
    const columns = [
        {
            label: "Name",
            name: "categoryName"
        },
        {
            label: "Image",
            name: "categoryImage",
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
                        <UpdateCategory categories={categories[tableMeta.rowIndex]} />
                    
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
            <AddCategories />
            {categories && categories?.length > 0 ?

                <MUIDataTable
                    title="Categories List"
                    data={categories}
                    columns={columns}
                />

                : null}
        </>
    )
}
export default disTableCategories; 