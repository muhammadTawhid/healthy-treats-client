import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AddProduct from "./component/AddProduct/AddProduct";
import Admin from "./component/Admin/Admin";
import Home from './component/Home.js/Home';
import Login from "./component/Login/Login";
import ManageProduct from "./component/Manage Product/ManageProduct";
import Orders from "./component/Orders/Orders";

function App() {
  return (
    <div  className="">
      <Router>
      
        <Switch>
        <Route path="/admin">
            <Admin />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
          <Route path="/addProducts">
            <AddProduct/>
          </Route>
          <Route path="/manageProducts">
            <ManageProduct/>
          </Route>
        </Switch>
    </Router>
      
    </div>
  );
}

export default App;
