import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="shadow">
      <nav style={{ marginLeft: "40px" }} className="navbar navbar-expand-lg navbar-light">
        <div className=" container-fluid">
          <Link style={{ fontSize: "40px" }} className="fw-bold fs-1 navbar-brand" to="/">Healthy Treats</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div style={{ marginLeft: "300px" }} className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="fw-bold nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link" to="/orders">Orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/deals">Deals</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;