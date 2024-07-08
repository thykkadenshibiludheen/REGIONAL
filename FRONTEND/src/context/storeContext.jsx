import axios from "axios";
import React, { createContext, useEffect, useState } from "react";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  const url = "http://localhost:4000"
  const [token,setToken]= useState("")
  const [product_list,setproductList ] = useState([])
  console.log(token)

  const addToCart =async (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(url+'/api/cart/add',{itemId},{headers:{token}})
      
    }
  };

  const removeFromCart =async (itemId) => {
    setCartItem((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
  } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
    if(token){
      await axios.post(url+'/api/cart/remove ',{itemId},{headers:{token}})
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = product_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount
  };

  const fetchproductList = async()=>{
    const response  = await axios.get(`${url}/api/product/list`)
    setproductList(response.data.data)
  }

  const loadCartData = async(token)=>{
    const response = await  axios.post(url+"/api/cart/get",{},{headers:{token}})
    setCartItem(response.data.cartData)
  }
 
 
  useEffect(()=>{
  
  async function loadData(){
    await fetchproductList()
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem('token'))
      await loadCartData(localStorage.getItem("token"))
    }
  }
  loadData()
 },[])
  const contextValue = {
    product_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
