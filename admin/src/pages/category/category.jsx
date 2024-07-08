import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './category.css';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const url = 'http://localhost:4000';

  const fetchList = async () => {
    try {
      const response = await axios.get(url + '/api/category/list');
      if (response.data.success) {
        setCategories(response.data.data); // Ensure the correct response structure
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch categories.');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('category', newCategory);
      formData.append('categoryImage', image);
      const response = await axios.post(url + '/api/category/add', formData);
      if (response.data.success) {
        toast.success('Category added successfully!');
        fetchList(); // Refresh the category list
        setNewCategory(''); // Clear the input field
      } else {
        toast.error('Failed to add category.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to add category.');
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      const response = await axios.delete( `${url}/api/category/delete/${id}`);
      if (response.data.success) {
        toast.success('Category deleted successfully!');
        fetchList(); // Refresh the category list
      } else {
        toast.error('Failed to delete category.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete category.');
    }
  };

  return (
    <div className="category-management">
      <form className="flex-col" onSubmit={handleAddCategory}>
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
        <div className="add-category-name flex-col">
          <p>Category Name</p>
          <input
            type="text"
            name="category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Type here"
            required
          />
        </div>
        <button type="submit" className="add-btn">Add</button>
      </form>

      <div className="category-list">
        {categories.map((category) => (
          <div key={category._id} className="category-item">
            <img src={`${url}/categoryImage/${category.image}`} alt="" />
            <p>{category.category}</p>
            <p className="cursor" onClick={() => handleDeleteCategory(category._id)}>x</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
