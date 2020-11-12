import React from "react";
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom"
import  { useStateValue }  from "./StateProvider"

function Header() {
    const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="header">
        <Link to="/">
        
      <img
        className="header-logo"
        src="https://p.kindpng.com/picc/s/128-1284706_thumb-image-monster-hunter-world-logo-hd-png.png"
      />
        </Link>
      <div className="header-search">
        <input className="searchIn" type="text" />
        <SearchIcon className="header-searchicon"/>
      </div>
      <div className="header-nav">
        <Link to='/login'>
        
        <div className="header-option">
          <span className="header-option1">Hello Guest</span>
          <span className="header-option2">Sign In</span>
        </div>
        
        </Link>
        <div className="header-option">
          <span className="header-option1">Part</span>
          <span className="header-option2">Orders</span>
        </div>
        <Link to="/checkout">
        
        <div className="header-optionCart">
          <ShoppingBasketIcon className="basket-icon"/>
            <span className="cartcount">{cart?.length}</span>
        </div>
        
        </Link>
      </div>
    </div>
  );
}

export default Header;
