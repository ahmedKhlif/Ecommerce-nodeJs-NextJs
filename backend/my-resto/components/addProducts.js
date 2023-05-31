"use client";
import React, { useState, useEffect } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Box, Button, Modal, Typography } from '@mui/material';
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
import { UploadFirebase } from '../utils/UploadFirebase';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height: 550,
    maxHeight: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    color: '#000',
    borderRadius: '20px',
    padding: '40px 30px 60px',
    textAlign: 'center',
};
function AjoutProd() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [file, setFile] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [categories, setCategories] = useState([]);
    const [categorieID, setCategorieID] = useState("");

    useEffect(() => {
        const getCat=async()=>{
            const res = await fetch('https://my-resto-nodejs.vercel.app/api/categories')
            const categories = await res.json();
            setCategories(categories)
            setCategorieID(categories[0]._id)
        }
        getCat()
    },[]);

    const handlesave = async (url) => {
        setImage(url);
        const prod = {
            designation: name,
            price: price,
            productImg: url,
            categoryID:categorieID

        };
    
       
        const res = await (await
            fetch('https://my-resto-nodejs.vercel.app/api/products', {
                method: 'POST',
                body: JSON.stringify(prod),
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json()
        if (res) {
            console.log('successfully inserted!')
            handleClose()
        }
        else {
            console.log(res);
        }
    }
    const handleUpload = (event) => {
        event.preventDefault();
        if (!file[0].file) {
            alert("Please upload an image first!");
        }
        else {
            console.log(file[0].file)
            resultHandleUpload(file[0].file, event);
        }
        if (!file[0].file) {
            alert("Please upload an image first!");
        }
    };
    const resultHandleUpload = async (file) => {

        try {

            const url = await UploadFirebase(file);
            console.log(url);

            handlesave(url)
        } catch (error) {
            console.log(error);
        }
    }
const handleCategoryChange=(e)=>{
    setCategorieID(e.target.value)
}

    return (
        <div>
            <Button type="button" className="btn text-light mb-3" onClick={handleOpen} style={{ backgroundColor: '#EA6E6E' }}>
                ADD
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Product
                    </Typography>
                    <hr />

                    <div className="mb-3">
                    <FormControl>
                <InputLabel id="categorie-label">Category</InputLabel>
                <Select
                    labelId="categorie-label"
                    name="categorieID"
                    value={categorieID}
                    onChange={handleCategoryChange}
                >
                    {categories.map((category) => (
                        <MenuItem key={category._id} value={category._id}>
                            {category.categoryName}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
                    </div>
                    <div className="mb-3">
                        <TextField variant="outlined"
                            label="Name" onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="">
                        <TextField variant="outlined"
                            label="Price" onChange={e => setPrice(e.target.value)} />
                    </div>
                    <div className="">
                        <h6>Select image</h6>
                        <center>
                            <div style={{ width: 200, height: 250 }}>
                                <FilePond
                                    files={file}
                                    allowMultiple={false}
                                    onupdatefiles={setFile}
                                    labelIdle='<span class="filepond--label-action">Browse One</span>'

                                />
                            </div>
                            <div className="mb-5">

                                <Button type="button" className="btn btn-danger me-2 mb-5"
                                    style={{ backgroundColor: '#EA6E6E', color: 'white' }} onClick={(event) => handleUpload(event)}>Save</Button>
                                <Button type="button" className="btn btn-secondary mb-5" style={{ backgroundColor: '#D5D2D1', color: 'black' }}
                                    onClick={handleClose}>Close</Button>
                            </div>
                        </center>

                    </div>

                    <hr />


                </Box>
            </Modal>
        </div>
    )
}



export default AjoutProd