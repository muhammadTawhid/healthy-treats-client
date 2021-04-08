import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="d-flex justify-content-center mt-5   ">
           <div className="border shadow">
           <form style={{ maxWidth: "300px" }} >
         <input className="form-control" type="text"  name="name" placeholder="Your Name" required />
          <br />
          <input className="form-control" type="text"  name="email" placeholder="Your Email" required />
          <br />
          <input className="form-control" type="password"  name="password" placeholder="Your Password" required />
          <br />
          <input type="checkbox" name="switchForm" id="switchForm" />
          <label htmlFor="switchForm"> Create new account</label>
          <br />
          <div className="text-center">
          <Link to="/destination">
            <button  className="btn-primary text-center" type="submit">Submit</button>
            <br/>
            <button className="btn-primary mt-1"> Sign in with google</button>
          </Link>
          </div>

        </form>
           </div>
        </div>
    );
};

export default Login;