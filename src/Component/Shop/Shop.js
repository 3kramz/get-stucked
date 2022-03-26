import React from 'react';
import { useState, useEffect } from 'react';
import Gun from '../gun/Gun';
import './Shop.css'


const Shop = () => {
    // fatched data
    const [products, setProducts] = useState([])
    // data fatching
    useEffect(() => {
        fetch("fakeDb.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([])
    // add to cart btn event handler
    const handleEvent = event => {

        if (cart.length < 4) {
            const exixt = cart.find(gun => gun.id === event.id)
            if (!exixt) {
                const newCart = [...cart, event]
                setCart(newCart)
            }
        } else {
            alert("you can't add gun more then four")

        }

    }
    console.log(cart)
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