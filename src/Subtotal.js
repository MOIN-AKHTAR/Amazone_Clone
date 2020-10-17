import React from 'react';
import CurrencyFormat from 'react-currency-format';
import {getTotal} from './Utils';
import {useContextValue} from './StateProvider'

export default function Subtotal() {
    const [{basket}]=useContextValue()
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <React.Fragment>
                    <p>Subtotal {basket?.length} tems:<strong>{value}</strong></p>
                    <small className="subtotal_gif">
                        <input type="checkbox"/>This order contains a gift
                    </small>
                </React.Fragment>
            )}
            value={getTotal(basket)}
             displayType={'text'} 
             decimalScale={2}
             thousandSeparator={true}
              prefix={'$'}
            />
            <button className="checkout_button">Process To Checkout</button>
        </div>
    )
}
