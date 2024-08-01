import React, {useContext} from 'react'
import { Context } from './Context';
import { itemArray } from './Shopitems'

function Cartbuttons( props ) {
    const { cart, addItem, dropItem, resetCart} = useContext(Context);
    if (props.location == 'general'){
      return (
        <div className='standardItem'>
            {itemArray[props.index].itemName}
            {itemArray[props.index].productImage}
            <button onClick={() => addItem(itemArray[props.index].itemPrice, props.index)}>add</button>
            <button onClick={() => dropItem(itemArray[props.index].itemPrice, props.index)}>drop</button>
        </div>
      )
    }
    else if (props.location === 'cart') {
      return (
        <div>
          {cart.items >= 1 && cart.selectedItemArray.map((element, index) => (
            element > 0 && (
              <div key={index} className='cartItems'>
                {itemArray[index].itemName}
                {itemArray[index].productImage}
                <button onClick={() => dropItem(itemArray[index].itemPrice, index)}>-</button>
                {cart.selectedItemArray[index]}
                <button onClick={() => addItem(itemArray[index].itemPrice, index)}>+</button>
              </div>
            )))
          }
        </div>
      )
    }
    else{
      return(
        <button className= 'checkItOut' onClick={(resetCart)}>Empty Cart</button>
      )
    }
}

export default Cartbuttons