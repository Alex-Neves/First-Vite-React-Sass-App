import ContextProvider from './components/Context'
import React from 'react'
import StaticUniversals from './components/StaticUniversals'
import { Link } from 'react-router-dom'
import Logo from './assets/Images/bigdan.webp';

function Aboutus() {
  return ( 
    <ContextProvider>
      <StaticUniversals pathName = {window.location.pathname} pageName = 'About Us'>
        <h1>About Us</h1>
        <div className='contentDivider'>
          <h2>HELLO AND WELCOME TO BIG DAN'S HEMPORIUM!</h2>
          <img src= { Logo } className='bigDanLogo' alt = 'Big Dan Logo'/>
          <p>My name is Big Dan. I am originally from The Big Island of Hawaii.</p>
          <p> I was raised in one of the largest pro Cannabis environments in the world and I have tremendous love and passion for the healing properties of the Cannabis plant, specifically Hemp plants. CBD has changed my life and it is my goal to share this incredible natural aid with the world. I suffer from PTSD, anxiety, and pain. CBD has played an important role in regulating and maintaining an amazing sense of wellbeing for my body and mind, not to mention I now sleep like a baby. CBD has helped me achieve total body and mind relaxation.</p>
          <p>I currently reside in a suburb of Austin Texas with my lovely wife of 18 years, Kelly, and three beautiful boys, Alexander, Troy, and Luke (yes, I am a huge Star Wars fan and yes, that’s why I named him Luke.)</p>    
          <p>As a military veteran with PTSD I am fully aware of how amazing CBD can be when used regularly to help maintain a great sense of wellbeing and calm in the body and mind. It is my greatest honor to be able to share the Big Dan’s Hemporium line of CBD products with the world.</p>
          <p>I am a former amateur Powerlifter, and as a 40-year-old large man, and no stranger to discomfort and aches, CBD has made all the difference in the world for me.</p>
          <p>Thank you for being a part of the CBD revolution, thank you for being a part of my family. We treat all our clients like family and are happy to speak one on one with you to discuss your needs. Welcome to big Dan’s Hemporium!</p>
          <p>Our unique strains of cannabinoid-rich hemp are specifically bred from the most cutting-edge strains of Industrial Hemp. These plants were scientifically cross bred for the highest CBD ratios with the lowest THC levels.</p>
          <p>This resulted in consistent plant levels of less than 0.3% THC on a dry weight basis, meeting all Federal laws. All products we manufacture conform to the regulations of the 2018 US Farm Bills section 7606 which Federally legalized the cultivation of Registered United States Industrial Hemp under certain conditions to which chain partners fully comply.</p>
          <Link className= 'genericLink' to='/shop'><button className= "funnyButton">SHOP NOW</button></Link>
        </div>
      </StaticUniversals>
    </ContextProvider>
  )
}

export default Aboutus