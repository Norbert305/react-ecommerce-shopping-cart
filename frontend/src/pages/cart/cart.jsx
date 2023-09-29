import React, {useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context';
import CartItem from './cart-item';
import { useNavigate } from 'react-router-dom';
import './cart.css';


//rfce
function Cart() {

  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate();

  //So basically, the PRODUCTS Array is being mapped. So if the object data from inside the cartItems[our value id] is not 0
  //Then you can render the CartItem component onto our cart page showing our card. 

  return (
    <div className='cart'>
      <div>
        <h1>
          Your Cart Items
        </h1>
      </div>
      <div className='cartItems'>
      {PRODUCTS.map((product)=>{
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product}/>
          }
      })}
      </div>
      { totalAmount > 0 ?
      <div className='checkout'>
        <p>
          Subtotal: ${totalAmount}
        </p>
        <button onClick={()=>navigate("/")}>
          Continue Shopping
          </button>
        <button>
          Checkout
        </button>
      </div>
     :  <h1>Cart is Empty</h1> }
    </div>
  )
}
//If the total amount of the items is > 0 ? show the UI buttons : Cart is empty
export default Cart
