import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './Context'
import Barz from '../assets/Images/barz.webp'
import '../styles/header.scss'

function Sidenav() {
  const { open, setOpen } = useContext(Context)
    return (
    <div>
        <div className='side-nav'>
          <img alt='sidebar opener' src={Barz} onClick={() => setOpen(!open)} className='Barz' />
          <div className={`items ${open ? 'active' : 'inactive'}`}>
            <div className='sign-in-sidenav'>
              <Link className='Header-Link' to='/registration'>Register</Link>
              <p>or</p>
              <Link className='Header-Link' to='/registration'>Sign Up</Link>
            </div>
            <Link className='subnav-link' to='/shop'>Shop</Link>
            <Link className='subnav-link' to='/franchising'>Franchising</Link>
            <Link className='subnav-link' to='/shipping'>Shipping</Link>
            <Link className='subnav-link' to='/labtests'>Lab Tests</Link>
            <Link className='subnav-link' to='/contactus'>Contact Us</Link>
            <Link className='subnav-link' to='/faqs'>FAQ's</Link>
            <Link className='subnav-link' to='/aboutus'>About Us</Link>
            <Link className='subnav-link' to='/locations'>Locations</Link>
            <Link className='subnav-link' to='/sitemap'>Sitemap</Link>
          </div>
        </div>
    </div>
  )
}

export default Sidenav