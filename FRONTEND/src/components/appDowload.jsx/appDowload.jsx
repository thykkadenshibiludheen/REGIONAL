import React from 'react'
import './appDowload.css'
import { assets } from '../../assets/assets'
const appDowload = () => {
  return (
    <div className="app-download" id='app-download'>
        <p>for better experience dowload <br />REGEIONAL MARKETING APP</p>
        <div className="app-download-platform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
  }
export default appDowload