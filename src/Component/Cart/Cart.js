import React from 'react';
import './cart.css'

const Cart = ({gun}) => {
    return (
        <div className="cart">
            <img src={gun.img}alt="" />
            <h4>{gun.name}</h4>
        </div>
    );
};



export default Cart;