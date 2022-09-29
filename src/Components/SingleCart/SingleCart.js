import React from 'react';
import './SingleCart.css'

const SingleCart = ({cart}) => {
    const{img, name, time}=cart;
   
    return (
<div className="card  bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='time'>Time required {time} year</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary my-btn">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default SingleCart;