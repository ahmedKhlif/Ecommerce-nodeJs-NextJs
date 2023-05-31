"use client";
import React,{ useState,useEffect } from 'react'; 
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Box, Button, Modal, Typography } from '@mui/material';
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded';
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
    height: 600,
    maxHeight: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    color: '#000',
    borderRadius: '20px',
    padding: '40px 30px 60px',
    textAlign: 'center',
};
function UpdateProduct(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [id, setId] = useState();
    const [file, setFile] = useState();
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [price, setPrice] = useState();
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
    useEffect(() => {
        setId(props.products._id);
        setName(props.products.designation);
        setPrice(props.products.price);
        setImage(props.products.productImg);
    }, []);

    const handlesave = async (url) => {

        setImage(url);
        const prod = {
            designation: name,
            price: price,
            productImg: url,
            categoryID:categorieID
        };

        const res = await (await
            fetch('https://my-resto-nodejs.vercel.app/api/products/' + id, {
                method: 'PUT',
                body: JSON.stringify(prod),
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json()
        if (res) {
            console.log('successfully updated!')
            handleClose()
        }
        else {
            console.log(res);
        }
    }
    const handleUpload = (event) => {
        event.preventDefault();
        console.log("aaa")
        if (!file) {
            console.log("bbb")
            const url = image;
            handlesave(url);
        }
        else {
            console.log(file[0].file)
            resultHandleUpload(file[0].file);
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
        <>
            <span onClick={handleOpen}
                style={{ cursor: 'pointer' }}>
                <ChangeCircleRoundedIcon sx={{ color: '#84D468', marginRight: 1 }} />
            </span>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update Product
                    </Typography>
                    <hr />
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
                    <div className="mb-4">
                        <TextField variant="outlined" label="Name"
                            value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        {!file ? <img src={image} style={{ width: 70, height: 70 }} /> : null}
                        <h6 className='m-3'>Select new image</h6>
                        <center>
                            <div style={{ width: 200, height: 250 }}>
                                <FilePond
                                    files={file}
                                    allowMultiple={false}
                                    onupdatefiles={setFile}
                                    labelIdle='<span class="filepond--label-action">Browse One</span>'
                                />
                            </div>
                            <div className="mb-3">
                        <Button type="button" className="btn me-2 text-light" style={{ backgroundColor: "#84D468" }}
                            onClick={(event) => handleUpload(event)}>Update</Button>
                        <Button type="button" className="btn text-dark" style={{ backgroundColor: "#B8AEAE" }}
                            onClick={handleClose}>Close</Button>
                    </div>
                        </center>
                    </div>
               
                  
                </Box>
            </Modal>
        </>
    )
}

export default UpdateProduct