import React, { useContext } from 'react'
import "./placeOrder.css"
import { StoreContext } from '../../context/storeContext'

const placeOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
   <form action="" className="place-order">
  <div className="place-order-left">
    <p className="title">Delivery Information</p>
    <div className="multi-fields">
      <input type="text" placeholder=' First Name ' />
      <input type="text" placeholder='  Last Name' />
    </div>
    <input type="Email" placeholder='Email address'/>
    <input type="text" placeholder='street' />
    <div className="multi-fields">
      <input type="text" placeholder=' city ' />
      <input type="text" placeholder='  state' />
    </div>
    <div className="multi-fields">
      <input type="text" placeholder=' zip code' />
      <input type="text" placeholder=' Country' />
    </div>
    <input type="number"placeholder='Phone' />
  </div>
  <div className="place-order-right">
  <div className="cart-total">
             <h2>cart totals</h2>
             <div>
               <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>


               </div>
               <hr />
               <div className="cart-total-details">
              <p>delivery fee</p>
              <p>₹{2}</p>
               </div>
               <hr />
               <div className="cart-total-details">
                 <b>total</b>
                 <b>₹{getTotalCartAmount()+2}</b>
                </div>
                <button >PROCEED TO PAYMENT</button>
             </div>
        </div>

  </div>
   </form>
  )
}

export default placeOrder