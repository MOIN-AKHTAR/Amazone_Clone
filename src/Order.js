import React from 'react';
import Moment from 'moment'
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

export default function Order({order}) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p className="order_date">{Moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {
                order.data.basket?.map((item,index)=>(
                    <CheckoutProduct
                    id={item.id}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    title={item.title}
                    key={index}
                    hiddenButton
                />
                ))
            }
            <CurrencyFormat
            renderText={(value)=>(<h3 className="text_total">Total Amount : {value}</h3>)}
            value={order.data.amount}
             displayType={'text'} 
             decimalScale={2}
             thousandSeparator={true}
              prefix={'$'}
            />
        </div>
    )
}
