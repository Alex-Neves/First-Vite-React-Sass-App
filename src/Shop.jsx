import React from 'react'
import ContextProvider from './components/Context'
import StaticUniversals from './components/StaticUniversals'

function Shop() {
  return (
    <ContextProvider>
      <StaticUniversals pathName = {window.location.pathname} pageName = 'Shop'/>
      <div className='contentDivider'>
      </div>
    </ContextProvider>
  )
}

export default Shop