import React, { useContext } from 'react'
import '../styles/footer.scss';
import { Context } from './Context';
import { Link } from 'react-router-dom';
import facebookLogo from '../assets/Images/Facebook_Logo_Primary.webp'
import youtubeLogo from '../assets/Images/yt_icon_rgb.webp'
import instagramLogo from '../assets/Images/Instagram_Glyph_Gradient.webp'

function Footer() {
  const { open } = useContext(Context)
  return (
    <div className={`Footer ${open ? 'active' : 'inactive'}`}>
      <div className= 'textBlock1'>
        <h2>Big Dan's Hemporium</h2>
        <p>Street, City, State ZIP<br/>808-865-1513</p>
      </div>
      <div className='textBlock2'>
        <h2>General Information</h2>
        <Link className='footerLink' to='/shop'>Shop</Link><br/>
        <Link className='footerLink' to='/contactus'>Contact Us</Link><br/>
        <Link className='footerLink' to='/faqs'>FAQ's</Link><br/>
        <Link className='footerLink' to='/aboutus'>About Us</Link><br/>
        <Link className='footerLink' to='/locations'>Locations</Link><br/>
        <Link className='footerLink' to='/sitemap'>Sitemap</Link>
      </div>
      <div className='textBlock3'>
        <h2>Business Inquiries</h2>
        <Link className='footerLink' to='/franchising'>Franchising</Link><br/>
        <Link className='footerLink' to='/shipping'>Shipping</Link><br/>
        <a className='footerLink' href="https://bigdanshemporium.goaffpro.com/">Affiliate Program</a>
      </div>
      <div className='textBlock4'>
        <h2>Follow Us Here</h2>
        <a href="https://www.facebook.com/Bigdanshemporium/"><img src= { facebookLogo } alt='facebook link'/></a>
        <a href="https://www.youtube.com/@CLUB420ATX"><img src= { youtubeLogo } alt='youtube link'/></a>
        <a href="https://www.instagram.com/bigdanshemporium/"><img src= { instagramLogo } alt='instagram link'/></a>
      </div>
      <div className='payment-processor'>

      </div>
    </div>
  )
}

export default Footer