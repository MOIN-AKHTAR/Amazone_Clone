import React from 'react'

export default function Product({title,price,image,rating,alt}) {
    return (
        <div className="product">
         <div className="product__info">
             <p>{title}</p>
             <p className="product__price">
                 <small>$</small>
                 <strong>{price}</strong>
             </p>
             <div className="product__rating">
                {Array(rating).fill().map((_,index)=><p key={index}>⭐</p>)}
             </div>
             </div>
             <img src={image} alt={alt}/> 
             <button>Add To Basket</button>
        </div>
    )
}


// <p>🌟</p>