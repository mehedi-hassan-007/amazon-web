import React from 'react';
import "./OrderCart.css";

const OrderCart = (props) => {
    const Cart = props.Cart;
    let total=0;
    for(let i = 0;i < Cart.length; i++){
        const product = Cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total >35){
        shipping= 0;
    }
    else if (total > 15){
        shipping = 4.99;
    }
    else if (total > 0){
        shipping = 12.99;
    }
    return (
        <div className="order-cart">
            <h4>Order Summary</h4>
            <h5>Items Order: {Cart.length}</h5>
            <p>product price: {total}</p>
            <p><small>shipping cost: {shipping}</small></p>
            <p>Total price {total + shipping}</p>
        </div>
    );
};

export default OrderCart;