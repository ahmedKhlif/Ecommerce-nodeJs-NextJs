"use client";
import React from "react";
import { useRouter } from 'next/navigation';
import "./style.css";
import { Paper, Divider, MenuList, MenuItem, Typography } from
    '@mui/material';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
const AdminSidebar = () => {
    const router = useRouter();

    return (
        <div className="containerst">
            <Paper className="stylepop" >
                <MenuList >
                    <MenuItem >
                        <div onClick={() => router.push("/dashboard") }
                            className="row stylediv">
                            <div>
                                <DashboardRoundedIcon sx={{ color: '#FFB4B4' }} />
                            </div>
                            <div><Typography sx={{ color: 'gray' }}>Dashboard</Typography></div>
                        </div>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <div onClick={() => { }}
                            className="stylediv">
                            <div>
                                <PersonRoundedIcon sx={{ color: '#94D0CC' }} />
                            </div>
                            <div><Typography sx={{ color: 'gray' }}>User Profile</Typography></div>
                        </div>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <div onClick={() => { }}
                            className="stylediv">
                            <div>
                                <PeopleRoundedIcon sx={{ color: '#E97777' }} />
                            </div>
                            <div><Typography sx={{ color: 'gray' }}>Clients</Typography></div>
                        </div>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <div onClick={() => router.push('/CategoriesTable')}
                            className="stylediv">
                            <div>
                                <ArticleOutlinedIcon sx={{ color: '#9FFC71' }} />
                            </div>
                            <div><Typography sx={{ color: 'gray' }}>
                                Categories</Typography></div>
                        </div>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <div onClick={() => router.push('/ProductsTable')}
                            className="stylediv">
                            <div>
                                <FastfoodIcon sx={{ color: '#AE8AE3' }} />
                            </div>
                            <div><Typography sx={{ color: 'gray' }}>Products</Typography></div>
                        </div>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <div onClick={() => { }}
                            className="stylediv">
                            <div>
                                <AddShoppingCartIcon sx={{ color: '#6DF6B4' }} />
                            </div>
                            <div><Typography sx={{ color: 'gray' }}>Orders</Typography></div>
                        </div>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <div onClick={() => { router.push('/dashboard') }}
                            className="stylediv">
                            <div>
                                <SettingsSuggestIcon sx={{ color: '#FD967A' }} />
                            </div>
                            <div><Typography sx={{ color: 'gray' }}>Settings</Typography></div>
                        </div>
                    </MenuItem>
                    <Divider />
                </MenuList>
            </Paper>
        </div>
    );
};
export default AdminSidebar; 
