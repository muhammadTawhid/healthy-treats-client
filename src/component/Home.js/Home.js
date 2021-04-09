import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ManageProduct from '../Manage Product/ManageProduct';
import Product from '../Product/Product';

const Home = () => {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])

  return (
    <div>
      <Header></Header>
      <div className="text-center mt-5">
        {
          products.length === 0 && <div className="spinner-border " role="status">
          </div>
        }
      </div>
      <div className="row mt-5  ">

        {
          products.map(product => <Product product={product}></Product>)
        }
      </div>
      {/* <div>
        {
          products.map(product => <ManageProduct  product={product}></ManageProduct> )
        }
      </div> */}

    </div>
  );
};

export default Home;