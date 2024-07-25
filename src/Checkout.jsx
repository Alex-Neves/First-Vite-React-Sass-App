import React from 'react'
import ContextProvider from './components/Context'
import StaticUniversals from './components/StaticUniversals'

function Checkout() {
  return (    
    <ContextProvider>
      <StaticUniversals pathName = {window.location.pathname} pageName = 'Checkout'>
       <div className='contentDivider'>
       </div>
      </StaticUniversals>
    </ContextProvider>
  )
}

export default Checkout