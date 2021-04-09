import React, { useEffect, useState } from 'react';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';
import ManageItem from '../ManageItem/ManageItem';

const ManageProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
   
    return (

        <div>
            <div>
                <Header></Header>
            </div>
            <div style={{ backgroundColor: 'grey', borderRadius: "10px",display:"flex", maxWidth:"65rem", marginLeft:"7.5rem",marginTop:"5rem"}}>
            <div>
                <Admin></Admin>
            </div>
            <div style={{ maxWidth: "40rem", backgroundColor:"lightGrey" }} className="container border ">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                    </tr>
                </thead>

                {
                    products.map(product => <ManageItem product={product}></ManageItem>)
                }

            </div >
            </div>
        </div>

    );
};

export default ManageProduct;











        //                 <div >
        //     {/* <div>
        //         <Header></Header>
        //     </div> */}
        //     <div style={{ backgroundColor: 'grey', maxWidth: "60rem", borderRadius: "10px", marginLeft: "10rem" }} >
        //         {/* <div>
        //         <Admin></Admin>
        //     </div> */}

        //         <div className="d-flex justify-content-center">
        //             <div className="card mt-5" style={{ width: "18rem;" }}>
        //                 <div className="card-header d-flex">
        //                     <h5>Items</h5> <h5 style={{ marginLeft: "10rem" }}>Price</h5>
        //                 </div>
        //                 



        //             </div>
        //         </div>
        //     </div>
        // </div>