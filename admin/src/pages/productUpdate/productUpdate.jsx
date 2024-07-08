import React, { useEffect, useState } from 'react';
import './productUpdate.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const url = "http://localhost:4000";
  const { id } = useParams(); // Get the product ID from the URL
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    stock: "",
    price: "",
    category: "chandrika"
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${url}/api/product/singleProduct/${id}`);
        if (response.data.success) {
          const product = response.data.product;
          setData({
            name: product.name,
            description: product.description,
            stock: product.stock,
            price: product.price,
            category: product.category
          });
          setImage(product.image); // Assuming the image URL is returned in product.image
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Error fetching product data");
      }
    };

    fetchProduct();
  }, [id]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("stock", Number(data.stock));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/product/update/${id}`, formData);
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error updating product");
    }
  };

  return (
    <div className="update">
      <form onSubmit={onSubmitHandler} className="flex-col">
        <div className="update-img-upload flex-col">
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
        <div className="update-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            required
          />
        </div>
        <div className="update-product-description flex-col">
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
        <div className="update-category-price">
          <div className="update-category flex-col">
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
              required
            >
              <option value="chandrika">Chandrika</option>
              <option value="dabour">Dabour</option>
              <option value="sandoor">Sandoor</option>
              <option value="himalaya">Himalaya</option>
              <option value="colgate">Colgate</option>
            </select>
          </div>
          <div className="update-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="₹20"
              required
            />
          </div>
          <div className="update-price flex-col">
            <p>Stock</p>
            <input
              onChange={onChangeHandler}
              value={data.stock}
              type="number"
              name="stock"
              placeholder="10"
              required
            />
          </div>
        </div>
        <button type="submit" className="update-btn">Update</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
