import React from 'react'
import ContextProvider from './components/Context'
import StaticUniversals from './components/StaticUniversals'

function Registration() {
  return (
    <ContextProvider>
      <StaticUniversals pathName = {window.location.pathname} pageName = 'Registration'/>
      <div className='contentDivider'>
      </div>
    </ContextProvider>
  )
}

export default Registration