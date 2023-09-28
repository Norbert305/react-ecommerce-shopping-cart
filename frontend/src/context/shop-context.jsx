import React, { useState, createContext } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    //in order to create id's equal to the product. Can add more products to the products array in product.js 
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
}

function ShopContextProvider(props) {

const [ cartItems, setCartItems ] = useState(getDefaultCart());

const getTotalCartAmount =()=> {
    //find the product to have access to the price of that product
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = PRODUCTS.find((product)=> product.id === Number(item))
            //"cartItem[item]" is the amount of the specific product inside the cart
            //if we have 2, then multiply the price times 2
            totalAmount += cartItems[item] * itemInfo.price
        }
    }
    return totalAmount;
}

const addToCart = (itemId) => {
    setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
};

const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}))
};

const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: newAmount}))
}

const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}

console.log(cartItems);

  return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider