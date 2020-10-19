import React,{useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import Login from './Login'
import './App.css';
import Checkout from './Checkout';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {auth} from './fireBase';
import {useContextValue} from './StateProvider';
import {SET_USER} from './Type';
import Payment from './Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'
import Orders from './Orders';

const stripePromise = loadStripe(STRIPT_PUBLIC_KEY);

function App() {

  const [{user},dispatch]=useContextValue();

  useEffect(() => {
    // Real Time User State Is Being Checked----
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
        type:SET_USER,
        user:authUser
        })
      }else{
        dispatch({
          type:SET_USER,
          user:null
        })
      }
    })
    
  }, [user])

  return (
    <BrowserRouter>
       <Switch>
         <Route path="/login" component={Login}/>
         <Route path="/checkout">
           <Header/>
           <Checkout/>
         </Route>
         <Route path="/payment">
           <Header/>
           <Elements stripe={stripePromise}>
            <Payment/>
           </Elements>
         </Route>
         <Route path="/orders">
           <Header/>
           <Orders/>
         </Route>
         <Route path="/">
            <Header/>
            <Home/>
         </Route>
       </Switch>
    </BrowserRouter>
  );
}
export default App;





