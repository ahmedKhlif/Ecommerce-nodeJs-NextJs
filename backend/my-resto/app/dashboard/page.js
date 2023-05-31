"use client"
import React from "react";
import Image from 'next/image'
const DashboardPage = () => {
    return (
        <div className="container">
            <Image src="/images/charts.png" alt="" width={950} height={290}
                priority />
        </div>
    )
}
export default DashboardPage; 
