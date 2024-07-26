import React from 'react'
import ContextProvider from './components/Context'
import StaticUniversals from './components/StaticUniversals'
import { Link } from 'react-router-dom'
import franchisingVideo from './assets/Videos/Club_420_Franchising.mp4'

function Franchising() {
  return (
    <ContextProvider>
      <StaticUniversals pathName = {window.location.pathname} pageName = 'Franchising'>
        <div className='contentDivider'>
          <h1>FRANCHISE WITH US</h1>
          <p>How would you like to be your own boss and participate in the GREEN RUSH? Contact us today to start your journey as an entrepeneur in one of the fastest growing industries in the world!</p>
          <Link to= '/contactus' className='genericLink'><button class="funnyButton">CONTACT US</button></Link>
          <video src= {franchisingVideo} type="video/mp4" controls />
        </div>
      </StaticUniversals>
    </ContextProvider>
  )
}

export default Franchising