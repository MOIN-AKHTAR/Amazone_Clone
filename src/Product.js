import React from 'react';
import {useContextValue} from './StateProvider';
import {ADD_TO_BASKET} from './Type'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Product({id,title,price,image,rating,alt}) {


   const [,dispatch]=useContextValue();
    const addToBasket=()=>{
          dispatch({
              type:ADD_TO_BASKET,
              item:{id,title,price,image,rating}
          });
          toast.success("Added To Basket",{position:toast.POSITION.BOTTOM_RIGHT,autoClose:2000})
    }

    return (
        <React.Fragment>
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
        <ToastContainer/>
        </React.Fragment>
    )
}


// <p>🌟</p>