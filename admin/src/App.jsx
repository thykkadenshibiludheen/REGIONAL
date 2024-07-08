import React from 'react'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import {Route, Routes} from "react-router-dom"
import Add from './pages/add/add'
import Orders from './pages/orders/orders'
import List from './pages/list/list'
import Category from './pages/category/category'
import Users from './pages/users/users'
import UpdateProduct from './pages/productUpdate/productUpdate'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
    <Routes>
      <Route path='/add' element={<Add/>}/>
      <Route path='/list' element={<List/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/update/:id' element={<UpdateProduct/>}/>
      
          </Routes>
      </div>
    </div>
  )
}

export default App