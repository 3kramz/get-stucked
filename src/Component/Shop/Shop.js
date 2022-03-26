import React from 'react';
import Gun from '../gun/Gun';
import './Shop.css'


const Shop = ({ products }) => {
    return (
        <div className='shop-container'>
            <div className="product-container">
                {products.map(gun=><Gun gun={gun} key={gun.id}> </Gun>)}
                </div>
            <div className="cart-C"></div>
        </div>
    );
};

export default Shop;