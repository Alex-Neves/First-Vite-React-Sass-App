import React, { useState, createContext, useEffect } from "react";

const Cart = {
  items: 0,
  subtotal: 0.00,
  selectedItemArray: [0, 0, 0, 0, 0, 0, 0, 0, 0]
};

const getInitialState = () => {
  const cart = localStorage.getItem('The_Cart')
  return cart ? JSON.parse(cart) : Cart;
}

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState(getInitialState);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('The_Cart', JSON.stringify(cart))
  }, [cart])

  function addItem(price, specificIndex){
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items + 1,
      subtotal: prevCart.subtotal + price,
      selectedItemArray: prevCart.selectedItemArray.map((numberOfItems, index) =>
        index == specificIndex ? Math.max(numberOfItems + 1, 0) : numberOfItems
      )
    }));
  }

  function dropItem(price, specificIndex) {
    if (cart.selectedItemArray[specificIndex] > 0){
      setCart((prevCart) => ({
        ...prevCart,
        items: Math.max(prevCart.items - 1, 0),
        subtotal: Math.max(prevCart.subtotal - price, 0),
        selectedItemArray: prevCart.selectedItemArray.map((numberOfItems, index) =>
          index == specificIndex ? Math.max(numberOfItems - 1, 0) : numberOfItems
        )
      }))
    }
    else{
      prevCart
    }
  }
    

  const resetCart = () => {
    setCart(Cart)
  };

  return (
    <Context.Provider value={{ cart, setCart, addItem, dropItem, resetCart, open, setOpen}}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;