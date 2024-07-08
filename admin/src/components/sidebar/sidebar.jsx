import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const sidebar = () => {
  return (
 <div className="sidebar">
    <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>list Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>orders</p>
        </NavLink>
         <NavLink to='/category' className='sidebar-option'>
            <img src={assets.order_icon} alt="" />
            <p>category </p>
         </NavLink>
         <NavLink to='/users' className='sidebar-option'>
            <img src={assets.order_icon} alt="" />
            <p>Users </p>
         </NavLink>
    </div>
 </div>
  )
}

export default sidebar