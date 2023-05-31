'use client';
import AdminSidebar from "@/components/adminSidebar";
import { useSession } from 'next-auth/react';
function CategoryLayout({ children }) {
    const { data } = useSession();
    return (
        data?.user.name == "Emna Abbes" ? (
            <div className="row bg">
                <div className="col-md-12 col-lg-2 mb-4 mb-lg-0 pt-4 me-5">
                    <AdminSidebar />
                </div>
                <div className="col-md-9 col-lg-7 mb-4 mb-lg-0 pt-4 ">
                    {children}
                </div>
            </div>
        ) :
            <div className="row mt-5">
                <div className="col-12 mt-5">
                    <h2 className="d-flex justify-content-center mt-5">Access allowed except for administrators!</h2>
                </div>
            </div>
    );
}
export default CategoryLayout; 
