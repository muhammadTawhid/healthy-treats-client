import React from 'react';


const ManageItem = ({ product }) => {

    const deleteEvent = id => {
        console.log(id)
        fetch(`http://localhost:5000/delete/${id}`, {
            method:'DELETE',
            
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


{/* <table className="table justify-content-between">

<tbody >
    <tr >
        <th scope="row"></th>
        <td >{product.name}</td>
        <td  >{product.price}</td>
        <button className="text-center" >Remove</button>

    </tr>
</tbody>
</table> */}



