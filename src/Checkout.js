import React from 'react';
import Subtotal from './Subtotal';

export default function Checkout() {
    return (
        <div className="checkout_container">
           <div className="checkout_left">
           <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Advertiser" aria-hidden
            className="checkout_image"
            />
            <div>
                <h2 className="checkout_title">Your Shopping Basket</h2>
            </div>
           </div>
           <div className="checkout_right">
              <Subtotal />
           </div>
        </div>
    )
}
