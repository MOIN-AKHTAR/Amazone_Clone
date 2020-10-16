import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

export default function Header() {
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
               <div className="header__option">
                   <span className="header__optionLineOne">Hello Guest</span>
                   <span className="header__optionLineTwo">Sign In</span>
               </div>
               <div className="header__option">
                   <span className="header__optionLineOne">Returns</span>
                   <span className="header__optionLineTwo">& Orders</span>
               </div>
               <div className="header__option">
                   <span className="header__optionLineOne">Your</span>
                   <span className="header__optionLineTwo">Prime</span>
               </div>
           </div>
          <Link to="/checkout">
            <div className="header_shoppingBasket">
               <ShoppingBasket/>
               <span className="basket_qty">0</span>
             </div>
          </Link>
        </header>
    );
}
