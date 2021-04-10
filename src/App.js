import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AddProduct from "./component/AddProduct/AddProduct";
import Admin from "./component/Admin/Admin";
import Deals from "./component/Deals/Deals";
import EditProduct from "./component/EditProduct/EditProduct";
import Home from './component/Home.js/Home';
import Login from "./component/Login/Login";
import ManageProduct from "./component/Manage Product/ManageProduct";
import Orders from "./component/Orders/Orders";
import PrivetRoute from "./component/PrivetRoute/PrivetRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
        <PrivetRoute path="/admin">
            <Admin />
          </PrivetRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivetRoute path="/orders">
            <Orders/>
          </PrivetRoute>
          <PrivetRoute path="/addProducts">
            <AddProduct/>
          </PrivetRoute>
          <PrivetRoute path="/manageProducts">
            <ManageProduct/>
          </PrivetRoute>
          <PrivetRoute path="/editProducts">
            <EditProduct/>
          </PrivetRoute>
          <Route path="/deals">
            <Deals/>
          </Route>
        </Switch>
    </Router>
      
    </UserContext.Provider>
  );
}

export default App;
