import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    console.log(product.imgURL)
    return (
        <div className="col-md-3 d-flex justify-content-center mb-3 " >
            <div className="card shadow" style={{width:"13rem", height:"20rem"}} >
                <img src={product.imageURL} class="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title fw-bold">{product.name}</h5>
                    <div className="d-flex m-">
                    <h3 className=" ">{product.price}</h3>
                    <Link to="login" className="btn btn-primary pe-3 ">Buy now</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Product;

