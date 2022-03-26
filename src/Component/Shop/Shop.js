import React from 'react';
import { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
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
        }
        else { alert("you can't add gun more then four") }
    }
    //    Get random number

    const randomNumber = n => {
        let num = (Math.floor(Math.random() * 10))

        if (num > n) {
            num = randomNumber(n)
        }
        if (num === undefined) {
            num = randomNumber(n)
        } else {
            return num
        }
    }

    // handle randome gun
    const [randomGun, setRandomGun] = useState({})

    const handleChoose = () => {
        const i = randomNumber(cart.length - 1)
       
        setRandomGun(cart[i])
    }
    

    const handleAgain = () => {
        setCart([])
        setRandomGun({})
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {products.map(gun => <Gun gun={gun} handleEvent={handleEvent} key={gun.id}> </Gun>)}
            </div>
            <div className="cart-container">
                <h3 className='cart-header'>Selected Guns</h3>
                {cart.map(gun => <Cart key={gun.id} gun={gun}></Cart>)}

                <div  onClick={handleChoose} className="btn">Choose One for me </div>
                {randomGun.id && <Cart gun={randomGun}></Cart>}
                <div onClick={handleAgain} className="btn">Start Again </div>

            </div>
        </div>
    );
};

export default Shop;