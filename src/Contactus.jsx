import React from 'react'
import ContextProvider from './components/Context'
import StaticUniversals from './components/StaticUniversals'

function Contactus() {
  return (
    <ContextProvider>
      <StaticUniversals pathName = {window.location.pathname} pageName = 'Contact Us'/>
    <div className='contentDivider'>
    </div>
    </ContextProvider>
  )
}

export default Contactus