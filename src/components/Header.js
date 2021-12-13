import React from 'react';
import { Link } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../StateProvider';
import SearchBar from './SearchBar';
import { auth } from '../firebase';
import goodsData from '../goodsData.json';
import './Header.css';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleSignInOut = () => {
    if (user) {
      auth.signOut();
    }
  };

  const setInputValue = (input) => {
    dispatch({
      type: 'SET_INPUT',
      input
    });
  };
  return (
    <nav className="header">
      <div className="header__links">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
            onClick={() => setInputValue('')}
          />
        </Link>

        <SearchBar className="header__searchBar--1" data={goodsData} />

        <div className="header__nav">
          <Link to={!user && '/login'} className="header__link">
            <div className="header__option" onClick={handleSignInOut}>
              <span className="header__optionLineOne">Hello {user ? user.email : 'Guest'}!</span>
              <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
          </Link>
          <Link to="/orders" className="header__link">
            <div onClick={() => setInputValue('')} className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>

          <Link to="/checkout" className="header__link">
            <div onClick={() => setInputValue('')} className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
          </Link>
        </div>
      </div>
      <SearchBar className="header__searchBar--2" data={goodsData} />
    </nav>
  );
}

export default Header;
