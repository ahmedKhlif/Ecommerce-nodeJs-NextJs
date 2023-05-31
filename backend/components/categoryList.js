"use client";
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const CategoryList = ({ categories }) => {
    return (
        <center>
            <Carousel className='mt-3' width="20%" >
                {categories?.map((category) => (
                    <div key={category?._id}>
                        <img src={category.categoryImage} alt={category?.categoryName}/>
                        <p className="legend">{category?.categoryName}</p>
                    </div>
                ))}
            </Carousel>
        </center>
    );
}
export default CategoryList; 
