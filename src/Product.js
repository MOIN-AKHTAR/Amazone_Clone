import React from 'react';
import {useContextValue} from './StateProvider';
import {ADD_TO_BASKET} from './Type'

export default function Product({id,title,price,image,rating,alt}) {


   const [,dispatch]=useContextValue();
    const addToBasket=()=>{
          dispatch({
              type:ADD_TO_BASKET,
              item:{id,title,price,image,rating}
          });
    }

    return (
        <div className="product">
         <div className="product__info">
             <p>{title}</p>
             <p className="product__price">
                 <small>$</small>
                 <strong>{price}</strong>
             </p>
             <div className="product__rating">
                {Array(rating).fill().map((_,index)=><span key={index} role="img" aria-label="emoji">⭐</span>)}
             </div>
             </div>
             <img src={image} alt={alt}/> 
             <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}


// <p>🌟</p>