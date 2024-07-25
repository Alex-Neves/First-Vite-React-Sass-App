import React from 'react'
import ContextProvider from './components/Context'
import StaticUniversals from './components/StaticUniversals'

function LabTests() {
  return (
    <ContextProvider>
      <StaticUniversals pathName = {window.location.pathname} pageName = 'Lab Tests'/>
      <div className='contentDivider'>  
      </div>
    </ContextProvider>
  )
}

export default LabTests