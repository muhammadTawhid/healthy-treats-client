import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
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
      <div  className="row mt-5  ">
        {
          products.map(product => <Product  product={product}></Product>)
        }
      </div>
    </div>
  );
};

export default Home;