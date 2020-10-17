import React from 'react';
import Subtotal from './Subtotal';
import {useContextValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

export default function Checkout() {

    const [{basket}]=useContextValue();

    return (
        <div className="checkout_container">
           <div className="checkout_left">
           <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Advertiser" aria-hidden
            className="checkout_image"
            />
            <div>
                <h2 className="checkout_title">Your Shopping Basket</h2>
            </div>
             {
                basket.map((item,index)=>(
                   <CheckoutProduct
                   id={item.id}
                   image={item.image}
                   title={item.title}
                   price={item.price}
                   rating={item.rating}
                   key={index}
                   />
                ))
             }
           </div>
           <div className="checkout_right">
              <Subtotal />
           </div>
        </div>
    )
}
