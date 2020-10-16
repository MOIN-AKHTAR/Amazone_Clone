import React from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import Checkout from './Checkout';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
       <Header/>
       <Switch>
         <Route path="/checkout" component={Checkout}/>
         <Route path="/" component={Home}/>
       </Switch>
    </BrowserRouter>
  );
}
export default App;