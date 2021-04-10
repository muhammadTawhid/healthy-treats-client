import React from 'react';


const ManageItem = ({ product }) => {

    const deleteEvent = id => {
        console.log(id)
        fetch(`https://damp-ridge-81552.herokuapp.com/delete/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully')
            })
    }

    return (
        <div >


            <div className="d-flex justify-content-between border my-2">
                <div>
                    <p>{product.name}</p>
                </div>
                <div className="text-center">
                    {/* <p>{product.price}</p> */}
                </div>
                <button className="btn-secondary" onClick={() => deleteEvent(product._id)}>Remove</button>

            </div>
        </div>
    );
};

export default ManageItem;



