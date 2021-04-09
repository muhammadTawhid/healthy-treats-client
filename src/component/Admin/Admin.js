import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import ManageProduct from '../Manage Product/ManageProduct';


const Admin = () => {

//     const [products, setProduct] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/products')
//       .then(res => res.json())
//       .then(data => setProduct(data))
//   }, [])

    return (
        <div>
            <div  style={{maxWidth:"13rem", marginTop:"10rem", marginLeft:"10rem", backgroundColor:"lightgrey",borderRadius:"10px"}}>
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
            </div>
           
            {/* <div>
        {
          products.map(product => <ManageProduct  product={product}></ManageProduct> )
        }
      </div> */}
        </div>
    );
};

export default Admin;


