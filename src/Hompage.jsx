import ContextProvider from './components/Context'
import Cartbuttons from './components/Cartbuttons'
import StaticUniversals from './components/StaticUniversals'
import './global.scss'

function Homepage() {  
  return (
    <ContextProvider>
      <StaticUniversals pageName = 'Home'>
      <p className='ENJOY'>ENJOY FREE SHIPPING ALL MONTH LONG!!!</p>
        <div className='contentDivider'>
          <Cartbuttons index = {0} location = 'general'/>
          <Cartbuttons index = {1} location = 'general'/>
        </div>
      </StaticUniversals>
    </ContextProvider>
  )
}

export default Homepage
