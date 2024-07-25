import React from 'react'
import ContextProvider from './components/Context'
import StaticUniversals from './components/StaticUniversals'

function Cart() {
  return (
    <ContextProvider>
      <StaticUniversals pathName = {window.location.pathname} pageName = 'Cart'/>
      <div className='contentDivider'>
        <div>Cart</div>
      </div>
    </ContextProvider>
  )
}

export default Cart