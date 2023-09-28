import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
export function Product(props) {
    //retrieve the data from the mapping of the PRODUCTS array in the shop.jsx file using props

    const {id, productName, price, productImage } = props.data;

    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id]

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

export default Product
