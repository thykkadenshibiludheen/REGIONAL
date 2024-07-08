import React, { useEffect, useState } from 'react';
import './add.css';
import { assets } from '../../assets/assets';
import axios from 'axios'
import { toast } from 'react-toastify';

const Add = () => {
  const url = "http://localhost:4000"
  const [image, setImage] = useState(null);
 const [data,setData] = useState({
  name:"",
  description:"",
  stock:"",
  price:"",
  category:"chandrika"
 })
 const onChangeHandler=(event)=>{
 const name = event.target.name;
 const value = event.target.value;
 setData(data=>({...data,[name]:value}))
 }
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const onSubmitHandler = async(event)=>{
 event.preventDefault()
  const formData = new FormData()
  formData.append("name",data.name)
  formData.append("description",data.description)
  formData.append("price",Number(data.price))
  formData.append("stock",Number(data.stock))
  formData.append("category",data.category)
  formData.append("image",image)
  const response = await axios.post(`${url}/api/product/add`,formData)
  if(response.data.success){
    setData({
      name:"",
      description:"",
      price:"",
      stock:"",
      category:"chandrika"
     })
     setImage(false)
     toast.success(response.data.message)
  }
  else{
toast.error(response.data.message)
  }
  }


  return (
    <div className="add">
      <form onSubmit={onSubmitHandler} className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Area"
            />
          </label>
          <input
            onChange={handleImageChange}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input  onChange={onChangeHandler} value={data.name}type="text" name="name" placeholder="Type here" required />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
           onChange={onChangeHandler}
           value={data.description}
            name="description"
            rows="16"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select   onChange={onChangeHandler} value={data.category  }name="category" required>
              <option value="chandrika">Chandrika</option>
              <option value="dabour">Dabour</option>
              <option value="sandoor">Sandoor</option>
              <option value="himalaya">Himalaya</option>
              <option value="colgate">Colgate</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input  onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder="₹20" required />
          </div>
          <div className="add-price flex-col">
            <p>Stock</p>
            <input  onChange={onChangeHandler} value={data.stock} type="number" name="stock" placeholder="10" required />
          </div>
        </div>
        <button type="submit" className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default Add;
