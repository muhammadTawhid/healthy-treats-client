import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Admin from '../Admin/Admin';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/addProduct`

        console.log(productData)

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side res', res))
    };

    const handleImgUpload = product => {
        console.log(product.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'be8a4cc0a70c10d0afc35bcd7b9def3d');
        imageData.append('image', product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        
        <div>
            <div>
                <Admin></Admin>
            </div>
            <div className="d-flex justify-content-center mt-5  ">
            <div style={{ maxWidth: "15rem", }} className="text-center border border-5 shadow ">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-3">
                            <label for="exampleInputName" className="form-label">Your Product Name</label>
                            <input defaultValue="" {...register("name")} type="text" className="form-control" id="exampleInputName" placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPrice" className="form-label">Your Product Price</label>
                            <input defaultValue="" {...register("price")} type="text" className="form-control" id="exampleInputName" placeholder="Price" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleUploadFile" className="form-label"></label>
                            <input type="file" {...register("exampleRequired")} onChange={handleImgUpload} id="exampleInputFile" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default AddProduct;