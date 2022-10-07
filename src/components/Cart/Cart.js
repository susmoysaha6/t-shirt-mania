import React from 'react';


const Cart = ({ cart, handleRemoveItem }) => {
    return (
        <div>
            <h3>Order Summery</h3>
            <h5>Order Quantity:{cart.length}</h5>
            {
                cart.map(tshirt =>
                    <div key={tshirt._id}>
                        <img width={50} src={tshirt.picture} alt="" />
                        <p>{tshirt.name}</p>
                        <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;