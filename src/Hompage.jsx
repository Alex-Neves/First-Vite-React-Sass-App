import './global.scss'
import ContextProvider from './components/Context'
import Cartbuttons from './components/Cartbuttons'
import StaticUniversals from './components/StaticUniversals'
import { itemArray } from './components/Shopitems'

function Homepage() {  
  return (
    <ContextProvider>
      <StaticUniversals pageName = 'Home'>
      <p className='ENJOY'>ENJOY FREE SHIPPING ALL MONTH LONG!!!</p>
        <div className='contentDivider'>
          <Cartbuttons/>
          {itemArray[0].itemName}
          {itemArray[0].productImage}
        </div>
      </StaticUniversals>
    </ContextProvider>
  )
}

export default Homepage
