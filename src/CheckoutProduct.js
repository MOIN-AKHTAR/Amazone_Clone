import React from 'react';
import {REMOVE_FROM_BASKET} from './Type';
import {useContextValue} from './StateProvider'

export default function CheckoutProduct({id,image,title,rating,price}) {
         const [,dispatch]=useContextValue();

         const removeFromBasket=()=>{
             dispatch({
                 type:REMOVE_FROM_BASKET,
                 id
             })
         }

    return (
        <div className="checkout_product">
            <img src={image} alt="No Image" className="checout_product__img" aria-hidden/>
            <div className="checkcout_product__info">
                <p className="checkout_product__title">{title}</p>
                <div className="checkout_product__rating">
                {
                    Array(rating).fill().map((_,i)=><span key={i} role="img" aria-label="emoji">⭐</span>)
                }
                </div>
                <p className="checkout_product__price">
                    <span>$</span>
                    <strong>{price}</strong>
                </p>
                <button
                onClick={removeFromBasket}
                >Remove From Cart</button>
            </div>
        </div>
    )
}
