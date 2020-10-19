import React,{Component} from 'react';
import Subtotal from './Subtotal';

import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';
import {myContext} from './StateProvider'

export default class Checkout extends Component{
    render(){
      return (
          <div className="checkout_container">
             <div className="checkout_left">
             <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Advertiser" aria-hidden
              className="checkout_image"
              />
              <div>
                  <h2 className="checkout_title">Your Shopping Basket</h2>
              </div>
              <myContext.Consumer>
                 {(props)=>(
                  <FlipMove  >
               {
                  
                  props[0].basket.map((item,index)=>(
                   <div key={index}>
                   <CheckoutProduct
                     id={item.id}
                     image={item.image}
                     title={item.title}
                     price={item.price}
                     rating={item.rating}
                     />
                   </div>
                  ))
                  
               }
               </FlipMove>
                 )}
              </myContext.Consumer>
             </div>
             <div className="checkout_right">
                <Subtotal />
             </div>
          </div>
      )
  
    }
   }
