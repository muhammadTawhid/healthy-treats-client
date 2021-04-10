import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://damp-ridge-81552.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
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
      <div className="row my-5">

        {
          products.map(product => <Product product={product}></Product>)
        }
      </div>
    </div>
  );
};

export default Home;