import React from 'react';


const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item!!!</p>
    }
    else if (cart.length === 1) {
        message = <p>amar jonno arekta nao, please</p>
    }
    else {
        message = <p>Thanks for buying</p>
    }
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
            {
                message
            }
            {
                cart.length === 3 ? <p>Tin</p> : <p>kino</p>
            }
            <p>And operator</p>
            {cart.length === 2 && <h2>Double Item</h2>}
            <p>Or operator</p>
            {cart.length === 4 || <h4>4Ta item na</h4>}
        </div>
    );
};

export default Cart;