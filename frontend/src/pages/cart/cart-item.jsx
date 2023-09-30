import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context';

function CartItem(props) {
    //So this card is what's being rendered inside of our cart component. Which includes all of the features from our ShopContext component
    const {id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount  } = useContext(ShopContext);
      //props are being passed from the mapping of our PRODUCTS Array.
  return (
    <div className='cartItem'>
      <img src={productImage} />
      <div className='description'>
        <p>
            <strong>
                {productName}
            </strong>
        </p>
        <p>
            ${price}
        </p>
        <div className='countHandler'>
            <button onClick={()=>removeFromCart(id)}>
                -
            </button>
            <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), id)}/>
            <button onClick={()=>addToCart(id)}>
                +
            </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem