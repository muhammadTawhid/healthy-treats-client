import React from 'react';
import Header from '../Header/Header';


const Orders = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="card mt-5" style={{ width: "14rem;" }}>
                    <div className="card-header d-flex">
                        <h5>Items</h5> <h5 style={{ marginLeft: "30rem" }}>Price</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                    <div style={{ marginLeft: "28rem" }} className="card-footer">
                        <h5>Total:</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;