import React, { useEffect, useState } from 'react'
import  './list.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'

const list = () => {
  const url = "http://localhost:4000"
  const[list,setList] = useState([])
  const fetchList = async()=>{
    const response = await axios.get(`${url}/api/product/list`)

    if (response.data.success) {
      setList(response.data.data)
    }else{
      toast.error(response.data.message)
    }
  }
const removeProduct  = async(productId)=>{
  const response  = await axios.post(`${url}/api/product/remove`,{id:productId})
  await fetchList()
  if(response.data.success){
    toast.success(response.data.message)
  }else{
    toast.error("error")
  }

}
  useEffect(()=>{
fetchList()
  },[])
  return (
    <div className="list add flex-col">
      <p>all product list</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>image</b>
          <b>Name</b>
          <b>Category</b>
          <b>price</b>
          <b>action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/${item.image}`} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <NavLink to={`/update/${list._id}`}>
              Update
            </NavLink>
              <p onClick={()=>removeProduct(item._id)} className='cursor'>x</p>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default list