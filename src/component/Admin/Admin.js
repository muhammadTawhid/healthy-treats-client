import { Link } from 'react-router-dom';



const Admin = () => {



    return (
        <div>
            <div style={{ width: "12rem", margin: "5rem 5rem", backgroundColor: "lightgrey", }}>
                <ul>
                    <li>
                        <Link to="addProducts">Add Product</Link>
                    </li>
                    <li>
                        <Link to="manageProducts"> Manage Product</Link>
                    </li>
                    <li>
                        <Link to="editProducts"> Edit Product</Link>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    );
};

export default Admin;


