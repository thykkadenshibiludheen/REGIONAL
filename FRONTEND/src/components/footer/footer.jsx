import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const footer = () => {
  return (
<div className="footer" id='footer'> 
    <div className="footer-content">
        <div className="footer-content-left">
         <img  alt="logo" />
         <p>This website is owned by REGIONAL MARKETING COMPANY  all the develpement was coducted by shibiludheen"(sofware engneer)"</p>
         <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
         </div>
        </div>
        <div className="footer-content-center">
       <h2>company</h2>
       <ul>
        <li>home</li>
        <li>about us</li>
        <li>delivery</li>
        <li>privacy policy</li>
       </ul>
            
            </div>
        <div className="footer-content-right">
         <h2>GET IN TOUCH</h2>
         <ul>
            <li>8848441715</li>
            <li>thykkadenshibilu@gmail.com</li>
          
         </ul>
        </div>
       
    </div>
    <hr />
    <p className="footer-copyright">
       Copyright 2024 REGIONAL MARKETING COMPANY Reserved
    </p>
</div>
  )
}

export default footer