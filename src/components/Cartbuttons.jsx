import React, {useContext} from 'react'
import { Context } from './Context';
import { itemArray } from './Shopitems'

function Cartbuttons( props ) {
    const { cart, addItem, dropItem, resetCart} = useContext(Context);
  return (
    <div>
        <button onClick={() => addItem(itemArray[0].itemPrice)}>add</button>
        <button onClick={() => dropItem(itemArray[0].itemPrice)}>drop</button>
        <button onClick={(resetCart)}>reset</button>
    </div>
  )
}

export default Cartbuttons