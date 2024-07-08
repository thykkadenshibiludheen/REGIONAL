import React from 'react'
import './exploreMenu.css'
import{menu_list} from '../../assets/assets'

const exploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
        <h1>explore our product</h1>
        <p className='explore-menu-text'>choose any product that you like it is all quality product from REGIONAL MARKEING COMPANY</p>
         <div className="explore-menu-list">
             {menu_list.map((item,index)=>{
                 return(
                    <div  onClick={()=>setCategory(prev=>prev===item.menu_name?"all":item.menu_name)}key={index} className="explore-menu-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                 )
             })} 
         </div>
         <hr />
    </div>
  )
}

export default exploreMenu