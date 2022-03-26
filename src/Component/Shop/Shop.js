import React from 'react';
import { useState, useEffect } from 'react';
import Gun from '../gun/Gun';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("fakeDb.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleEvent = event => {console.log(event)}

    return (
        <div className='shop-container'>
            <div className="product-container">
                {products.map(gun => <Gun gun={gun} handleEvent={handleEvent} key={gun.id}> </Gun>)}
            </div>
            <div className="cart-container">Choosed product</div>
        </div>
    );
};

export default Shop;