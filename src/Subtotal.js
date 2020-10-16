import React from 'react';
import CurrencyFormat from 'react-currency-format'

export default function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={()=>(
                <React.Fragment>
                    <p>Subtotal 0 tems:<strong>0</strong></p>
                    <small className="subtotal_gif">
                        <input type="checkbox"/>This order contains a gift
                    </small>
                </React.Fragment>
            )}
            value={""}
             displayType={'text'} 
             decimalScale={2}
             thousandSeparator={true}
              prefix={'$'}
            />
            <button className="checkout_button">Process To Checkout</button>
        </div>
    )
}
