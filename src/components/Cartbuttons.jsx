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
            <div className='standardButtons'>            
              <button onClick={() => addItem(itemArray[props.index].itemPrice, props.index)}>Add to Cart</button>
              <button onClick={() => dropItem(itemArray[props.index].itemPrice, props.index)}>Drop from Cart</button>
            </div>
        </div>
      )
    }
    else if (props.location === 'cart') {
      return (
        <div>
          {cart.items >= 1 && cart.selectedItemArray.map((element, index) => (
            element > 0 && (
              <div key={index} className='cartItems'>
                <p>{itemArray[index].itemName}</p>
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
    else if (props.location == 'test'){
      return(
        <div className='standardItem'>
          {itemArray[props.index].itemName[props.subIndex]}
          {itemArray[props.index].productImage[props.subIndex]}
          <div className='standardButtons'>            
            <button onClick={() => addItem(itemArray[props.index].itemPrice[props.subIndex], props.index)}>Add to Cart</button>
            <button onClick={() => dropItem(itemArray[props.index].itemPrice[props.subIndex], props.index)}>Drop from Cart</button>
          </div>
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