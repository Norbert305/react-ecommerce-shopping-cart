import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
//ShopContext is imported so we have access to use the functional features from the shop-context file


export function Product(props) {

    //Home base for our products being presented on the home component.
    //retrieve the data from the mapping of the PRODUCTS array in the shop.jsx file using props
    
    const {id, productName, price, productImage } = props.data;//from our playful PRODUCTS Array
    // <Product data={product} /> ----> props.data
    const { addToCart, cartItems } = useContext(ShopContext);
//useContext is used to transfer the addToCart and cartItems functionality to different files without retyping purposes for reuse.
    const cartItemAmount = cartItems[id]//---> comes from the useContext being imported for reuse. 

  return (
    <div className='product' >

        <img src={productImage}/>
        <div className='description'>
            <p><strong>{productName}</strong></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
          </button>
    </div>
  )
}
//cartItemAmount can be visible with the button ----> Only shows if the cartAmount is > 0 with the value inside of (parentheses)
//The addToCart is used to populate the data for our item count. Check the console.log(item count shown here)

export default Product 