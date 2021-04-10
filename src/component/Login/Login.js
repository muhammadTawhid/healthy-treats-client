import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Header from '../Header/Header';
import { UserContext } from '../../App';


firebase.initializeApp(firebaseConfig);


const Login = () => {

  const history = useHistory()
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIN = () => {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        const loggedInUser = result.user;
        setLoggedInUser(loggedInUser);
        history.replace(from);
      }).catch((error) => {
        console.log(error)
      });
  }

  return (
    <div>
      <Header></Header>
      <div className="d-flex justify-content-center mt-5   ">
        <div className=" shadow">
          <form style={{ maxWidth: "300px" }} >
            <input className="form-control" type="text" name="name" placeholder="Your Name" required />
            <br />
            <input className="form-control" type="text" name="email" placeholder="Your Email" required />
            <br />
            <input className="form-control" type="password" name="password" placeholder="Your Password" required />
            <br />
            <input type="checkbox" name="switchForm" id="switchForm" />
            <label htmlFor="switchForm"> Create new account</label>
            <br />
          </form>
          <div className="text-center">
            <button className="btn-primary text-center" type="submit">Submit</button>
            <br />
            <button className="btn-primary mt-1" onClick={handleGoogleSignIN}> Sign in with google</button>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <h4>Logged in by: {loggedInUser.email}</h4>
      </div>
    </div>
  );
};

export default Login;


