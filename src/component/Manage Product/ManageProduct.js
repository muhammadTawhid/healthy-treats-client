import React from 'react';
import Admin from '../Admin/Admin';

const ManageProduct = () => {
    return (
        <div style={{backgroundColor:'grey', maxWidth:"60rem", borderRadius:"10px", marginLeft:"10rem"}}>
            <div>
                <Admin></Admin>
            </div>
           
            <div  className="d-flex justify-content-center mt-5">
            <h2 >manage product</h2>
            </div>
        </div>
    );
};

export default ManageProduct;