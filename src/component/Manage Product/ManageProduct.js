import React from 'react';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';

const ManageProduct = ({product}) => {
    // console.log(product.price)
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div style={{backgroundColor:'grey', maxWidth:"60rem", borderRadius:"10px", marginLeft:"10rem"}} >
            <div>
                <Admin></Admin>
            </div>
           
            <div  className="d-flex justify-content-center">
            <div className="card mt-5" style={{ width: "18rem;" }}>
                <div className="card-header d-flex">
                    <h5>Items</h5> <h5 style={{ marginLeft: "10rem" }}>Price</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item <button style={{ marginLeft: "28rem" }}>Remove</button></li>
                    <li className="list-group-item">A second item <button style={{ marginLeft: "25rem" }}>Remove</button></li>
                    <li className="list-group-item">A third item <button style={{ marginLeft: "26rem" }}>Remove</button></li>
                </ul>
                
            </div>
            </div>
        </div>
        </div>
    );
};

export default ManageProduct;