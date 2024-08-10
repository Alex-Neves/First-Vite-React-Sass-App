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
          <div className='itemsLine'>
            <Cartbuttons index = {0} location = 'general'/>
            <Cartbuttons index = {1} location = 'general'/>
            <Cartbuttons index = {2} location = 'general'/>
          </div>
        </div>
      </StaticUniversals>
    </ContextProvider>
  )
}

export default Homepage
