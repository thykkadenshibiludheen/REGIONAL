import React, { useContext} from 'react'
import './productItem.css'
import {assets} from'../../assets/assets'
import { StoreContext } from '../../context/storeContext'

const productItem = ({id,name,price,description,image}) => {
const url = "http://localhost:4000"
const {cartItem,addToCart,removeFromCart} = useContext(StoreContext)

  return (
<div className="product-item">
    <div className="product-item-img-container">
        <img src={ `${url}/images/${image}` } alt="" className="product-item-image" />
  {
    !cartItem[id]
     ?<img className='add' src={assets.add_icon_white} alt="" onClick={()=>addToCart(id)}/>
     : <div className="product-item-counter">
      <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
      <p>{cartItem[id ]}</p>
      <img  onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
     </div>
   }


    </div>
    <div className="product-item-info">
        <div className="product-item-name-rating">
              <p> {name}</p> 
              <img src={assets.rating_starts} alt="" />
        </div>
        <p className="product-item desc">{description}</p>
        <p className="product-item-price">₹{price}</p>
    </div>
</div>
  )
}

export default productItem