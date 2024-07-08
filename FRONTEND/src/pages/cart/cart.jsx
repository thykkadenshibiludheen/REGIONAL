import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/storeContext'
import { useNavigate } from 'react-router-dom'

const cart = () => {
  const url = "http://localhost:4000"
  const{cartItem,product_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>items</p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
        {product_list.map((item,index)=>{
if(cartItem[item._id]>0){
  return(
    <div>    <div className="cart-items-title cart-items-item">
    <img src={url+"/images/"+item.image} alt="" />
    <p>{item.name}</p>
    <p>₹{item.price}</p>
    <p>{cartItem[item._id]}</p>
    <p>₹{item.price*cartItem[item._id]}</p>
    <p  onClick={()=>removeFromCart(item._id)}className='cross'>x</p>
    </div>
    <hr />
    </div>

  )
}
        })}
      </div>
      <div className="cart-bottom">
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
              <p>₹{getTotalCartAmount()===0?0:2}</p>
               </div>
               <hr />
               <div className="cart-total-details">
                 <b>total</b>
                 <b>₹{getTotalCartAmount()+2}</b>
                </div>
                <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
             </div>
        </div>
        <div className="cart-promocode">
          <div>
            <p>
               If you have promo code,Enter it here
            </p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cart