import React from 'react'
import '../styles/header.scss'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className='navbar'>
            <Link className='subnav-link' to='/shop'>Shop</Link>
            <Link className='subnav-link' to='/franchising'>Franchising</Link>
            <Link className='subnav-link' to='/shipping'>Shipping</Link>
            <Link className='subnav-link' to='/labtests'>Lab Tests</Link>
            <Link className='subnav-link' to='/contactus'>Contact Us</Link>
            <Link className='subnav-link' to='/faqs'>FAQ's</Link>
            <Link className='subnav-link' to='/aboutus'>About Us</Link>
            <Link className='subnav-link' to='/locations'>Locations</Link>
        </div>
    </div>
  )
}

export default Navbar