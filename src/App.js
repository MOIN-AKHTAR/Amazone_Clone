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

function App() {

  const [,dispatch]=useContextValue();

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
    
  }, [])

  return (
    <BrowserRouter>
       <Switch>
         <Route path="/login" component={Login}/>
         <Route path="/checkout">
           <Header/>
           <Checkout/>
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