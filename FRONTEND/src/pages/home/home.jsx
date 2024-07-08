import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/header'
import ExploreMenu from '../../components/exploreMenu/exploreMenu'
import ProductDisplay from '../../components/productDisplay/productDisplay'
import AppDowload from '../../components/appDowload.jsx/appDowload'

const home = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <ProductDisplay category={category}/>
        <AppDowload/>
    </div>
  )
}

export default home