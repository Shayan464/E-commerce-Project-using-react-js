import React, { createContext, useContext, useState, useEffect } from "react";
import CommonButton from "./CommonButton";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const json = localStorage.getItem("cartItems");
    return json ? JSON.parse(json) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const TotalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
     0
  );
  const roundedTotal = Math.floor(TotalPrice * 100) / 100;
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const DeleteFromCart = (deletedProduct) => {
    setCartItems(prev => prev.filter( item => item.id !== deletedProduct))
  }

   const removeFromCartById = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const RemoveFromCart = (product) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
        )
      ); 
  
  };

  const remove = (product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <CartContext.Provider value={{cartItems,cartCount,roundedTotal,addToCart,RemoveFromCart,remove,DeleteFromCart,setCartItems,removeFromCartById}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
