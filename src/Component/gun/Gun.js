import React from 'react';
import './gun.css'

const Gun = ({gun}) => {
    return (
        <div className='gun'>
        <img src={gun.img} alt="" />
        <h4>{gun.name}</h4>
        <h6>{gun.price}</h6>
        <button>add to cart</button>
        </div>
    );
};

export default Gun;