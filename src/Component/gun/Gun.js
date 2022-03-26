import React from 'react';
import './gun.css'

const Gun = ({gun , handleEvent}) => {
    return (
        <div className='gun'>
        <img src={gun.img} alt="" />
        <h2>{gun.name}</h2>
        <h4>price ${gun.price}</h4>
        <button className='btn' onClick={()=>handleEvent(gun)}>add to cart</button>
        </div>
    );
};

export default Gun;