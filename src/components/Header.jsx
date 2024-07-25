import React, { useContext, useState } from 'react';
import '../styles/header.scss';
import { Link } from 'react-router-dom';
import '../assets/Fonts/Aerodynamic-aGag.otf';
import { Context } from './Context';
import Sidenav from './Sidenav';
import Navbar from './Navbar';

function Header() {
  const { cart } = useContext(Context);
  const [cartOpen, openCart] = useState(false);
  return (
    <div className='Header'>
      <div className='Top-Header-Content'>
      <Sidenav/>
        <Link to='/' className='ImgLink'>
          <img fetchpriority='high' loading='lazy' className='Big-Dan-Logo' alt='Big Dan Logo' src= 'src/assets/Images/bigdan.webp'/>
        </Link>
        <Link className='small-shopping-stuff' to= '/cart'>
          <img alt='Shopping Cart Icon' className='shopicon' src='src/assets/Images/shopping-cart.webp' />
          <p className='current_cart_items'>({cart.items})</p>
          </Link>
        <div className='search-bar-container'>
          <input type='search' placeholder='What can we help you with?' />
        </div>
        <div className='sign-in-options'>
          <Link className='Header-Link' to='/registration'>Register</Link>
          <p>or</p>
          <Link className='Header-Link' to='/registration'>Sign Up</Link>
        </div>
        <div className='shopping-stuff' onClick={() => openCart(!cartOpen)}>
          <img alt='Shopping Cart Icon' className='shopicon' src='src/assets/Images/shopping-cart.webp' />
          <p className='current_cart_items'>({cart.items})</p>
          <div className={`dropdown-cart ${cartOpen ? 'active' : 'inactive'}`}>
            <div className='items-menu'>
              <div className='checkMeOut'>
                <Link className='checkItOut' to='/checkout'>Checkout</Link>
                <Link className='checkItOut' to='/cart'>View Cart</Link>
              </div>
              <p>Subtotal = ${cart.subtotal}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Navbar/>
      </div>
    </div>
  );
}

export default Header;