import React from 'react'
import ContextProvider from './components/Context'
import StaticUniversals from './components/StaticUniversals'

function Sitemap() {
  return (
    <ContextProvider>
      <StaticUniversals pathName = {window.location.pathname} pageName = 'Sitemap'/>
      <div className='contentDivider'>
      </div>
    </ContextProvider>
  )
}

export default Sitemap