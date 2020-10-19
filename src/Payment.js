import React,{useState,useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import {useContextValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct'
import FlipMove from 'react-flip-move';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrnecyFormat from 'react-currency-format';
import {getTotal} from './Utils';
import Axios from './Axios';
import {db} from './fireBase';
import {EMPTY_BASKET} from './Type';

export default function Payment() {
const [{basket,user},dispatch]=useContextValue();
const stripe = useStripe();
const elements = useElements();
const [error,setError]=useState("");
const [disable,setDisabled]=useState(true);
const [processing,setProcessing]=useState(false);
const [succeed,setSucceed]=useState(false);
const [clientSecrete, setClientSecrete] = useState("");
const history=useHistory();
const [complete,setComplete]=useState(false)

const handleChange=async e=>{
    setError(e.error?e.error.message:"");
    setDisabled(e.empty);
    setComplete(e.complete)
}

const handleSubmit=async e =>{
       e.preventDefault();
       setProcessing(true);
    if(user){
        await stripe.confirmCardPayment(clientSecrete,{
            payment_method:{
                card:elements.getElement(CardElement),
            }
        }).then(({paymentIntent})=>{
         // paymentIntent = Payment Confirmation
         db.collection("users").doc(user.uid).collection("orders").doc(paymentIntent.id).set({
             basket:basket,
             amount:paymentIntent.amount,
             created:paymentIntent.created
         }).then(doc=>{
            setSucceed(true);
            setError(null);
            setProcessing(false);   
            history.replace("/orders");
            dispatch({type:EMPTY_BASKET});
         }).catch(err=>setError(err.message))
         
        })
    }else{
        history.replace("/login")
    }
}


useEffect(()=>{
 const getClietSecrete=async ()=>{
     const response=await Axios({
         method:"post",
        //  Stripe expect the total in a currencies subunits Such as Not in $ but in cent...
         url:`payments/create?total=${getTotal(basket)*100}`
     });
     setClientSecrete(response.data.clientSecrete)
 }
  getClietSecrete();
},[basket])

    return (
        <div className="payment">
            <h1> Checkout <Link to="/checkout">{basket?.length} (Items)</Link></h1>
            <div className="payment_container">
                <div className="payment_container__section">
                    <h4 className="payment_section__left">Delivery Address</h4>
                    <div className="payment_section__right">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment_container__section">
                    <h4 className="payment_section__left">Review Items And Delivery</h4>
                    <div className="payment_section__right">
                        <FlipMove>
                     {
                         basket.map((item,index)=>(
                            <div key={index}>
                            <CheckoutProduct
                             id={item.id}
                             image={item.image}
                             price={item.price}
                             rating={item.rating}
                             title={item.title}
                             />
                            </div>
                         ))
                     }
                     </FlipMove>
                    </div>
                </div>
                <div className="payment_container__section">
                        <h4 className="payment_section__left">PAYMENT METHOD</h4>
                        <div className="payment_section__right">
                            <form className="payment_form">
                                <CardElement
                                onChange={handleChange}
                                />
                                <CurrnecyFormat
                                renderText={(value)=>(<h3>Order Total:{value}</h3>)}
                                value={getTotal(basket)}
                                displayType={'text'} 
                                decimalScale={2}
                                thousandSeparator={true}
                                prefix={'$'}
                                />
                                <button disabled={processing || succeed || disable|| !complete}
                                onClick={handleSubmit}
                                className="pay_button"
                                >
                                    {processing?"Processing":"Buy Now"}
                                </button>
                                {error&&<div className="error">{error}</div>}
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}
