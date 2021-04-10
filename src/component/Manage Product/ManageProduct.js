import React, { useEffect, useState } from 'react';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';
import ManageItem from '../ManageItem/ManageItem';

const ManageProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://damp-ridge-81552.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (

        <div>
            <div>
                <Header></Header>
            </div>
            <div style={{ backgroundColor: 'grey', display: "flex", maxWidth: "65rem", margin: "5rem 5rem" }}>
                <div>
                    <Admin></Admin>
                </div>
                <div style={{ maxWidth: "40rem", backgroundColor: "lightGrey" }} className="container border ">
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

