import React, { useState, createContext } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    //in order to create id's equal to the product. Can add more products to the products array in product.js 
    let cart = {}
    //Loop through all of our items in the cart
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
}//for the default state of our cart without having to add anything.




function ShopContextProvider(props) {
//ShopContextProvider ----> keeps track of states and functions used within our project


//Our object {id: number of items} with 8 id properties
//For each id we will be able to see how many items are in the cart with this specific ID.
const [ cartItems, setCartItems ] = useState(getDefaultCart()); //-----> getDefaultCart being used to track the number of items added to our cart

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
    //contains the previous count of the item but adds + 1 to it
    setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
};

const removeFromCart = (itemId) => {
    //contains the previous count of the item but subtracts - 1 from it
    setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}))
};

const updateCartItemCount = (newAmount, itemId) => {
    //same thing as before, it holds the previous amount but now you can change the count directly.
        setCartItems((prev)=>({...prev, [itemId]: newAmount}))
}

const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}
//The contextValue is used to contain all the functions used in our Shop Context Provider and being 
//returned for execution as a prop by passing a value for access outside of this component.
console.log(cartItems);

  return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
  //ShopContext.Provider is used to keep track of all the data and organize the logic inside this single component
}

export default ShopContextProvider