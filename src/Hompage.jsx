import './global.scss'
import ContextProvider from './components/Context'
import Cartbuttons from './components/Cartbuttons'
import StaticUniversals from './components/StaticUniversals'
import { itemArray } from './components/Shopitems'

function Homepage() {  
  return (
    <ContextProvider>
      <StaticUniversals>
        <div className='contentDivider'>
          <Cartbuttons/>
          {itemArray[0].itemName}
          <img className= 'productImage' src={itemArray[0].productImage} alt ={itemArray[0].itemName}/>
        </div>
      </StaticUniversals>
    </ContextProvider>
  )
}

export default Homepage
