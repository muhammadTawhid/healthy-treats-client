import React from 'react';
import { Link } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';

const Admin = () => {
    return (
        <div style={{maxWidth:"18rem", marginTop:"20px"}}>
            <ul>
        <li>
          <Link to="addProducts">Add Product</Link>
        </li>
        <li>
            <Link to="manageProducts"> Manage Product</Link>
        </li>
        <li>
            <Link to="editProducts"> Edit Product</Link>
        </li>
      </ul>
      <hr/>
       <div>
          <AddProduct></AddProduct>
       </div>
      
        </div>
    );
};

export default Admin;


