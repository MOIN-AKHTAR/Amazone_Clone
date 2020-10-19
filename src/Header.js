import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useContextValue} from './StateProvider';
import {auth} from './fireBase'

export default function Header() {
    const [{basket,user}]=useContextValue();

    const handleAuthentication=(e)=>{
        if(user){
            auth.signOut();
        }
    } 


    return (
        <header className="header">
            <Link to="/">
                 <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" className="header__logo"/>
            </Link>
           <div className="header_search">
              <input type="text" className="search_input"/>
              <SearchIcon
               className="header_searchIcon"
              />
           </div>
           <div className="header_nav">
               <Link to={!user&&"/login"} className="link">
               <div className="header__option" onClick={handleAuthentication}>
                   <span className="header__optionLineOne">Hello {!user?"Guest":user.email}</span>
                   <span className="header__optionLineTwo">{user?"Log Out":"Sign In"}</span>
               </div>
               </Link>
               <Link to="/orders" className="link">
               <div className="header__option">
                   <span className="header__optionLineOne">Returns</span>
                   <span className="header__optionLineTwo">& Orders</span>
               </div>
               </Link>
               <div className="header__option">
                   <span className="header__optionLineOne">Your</span>
                   <span className="header__optionLineTwo">Prime</span>
               </div>
           </div>
          <Link to="/checkout" className="link">
            <div className="header_shoppingBasket">
               <ShoppingBasket/>
               <span className="basket_qty">{basket?basket.length:null}</span>
             </div>
          </Link>
        </header>
    );
}
