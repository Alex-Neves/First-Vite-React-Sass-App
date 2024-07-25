import React from 'react'
import ContextProvider from './components/Context'
import StaticUniversals from './components/StaticUniversals'

function Locations() {
  return (
    <ContextProvider>
      <StaticUniversals pathName = {window.location.pathname} pageName = 'Locations'>
      <h1>Our Locations</h1>
      <div className='contentDivider'>
      <h2>We currently have four locations happily and expediently serving the Austin Area:</h2>
      <h2 className="club420">Club 420 ATX</h2>
      <p>500 E 5th St., Austin, TX 78701</p>
      <h2>Thicket Food Park</h2>
      <p>Located at 7800 S 1st St, Austin Texas, 78745</p>
      <h2 className="broccoli">Broccoli ATX Dispensary</h2>
      <p>Located at 1109 E 6th St, Austin, TX 78702</p>
      <h2>Barton Creek Food Park</h2>
      <p>1720 Barton Springs Rd, Austin, TX 78704</p>
      </div>
      </StaticUniversals>
    </ContextProvider>
  )
}

export default Locations