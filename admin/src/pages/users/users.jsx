import React, { useState, useEffect } from 'react';
import './users.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Users = () => {
  const url = 'http://localhost:4000';
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/user/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('An error occurred while fetching the user list.');
      console.error(error);
    }
  };

  const updateUserStatus = async (id, status) => {
    try {
      const response = await axios.put(`${url}/api/user/update`, { id, value: status });
      if (response.data.success) {
        toast.success('User status updated successfully');
        fetchList(); // Refresh the list after update
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('An error occurred while updating the user status.');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleStatusChange = (id, event) => {
    const newStatus = event.target.value === 'true';
    updateUserStatus(id, newStatus);
  };

  return (
    <div className="list add flex-col">
      <p>All user list</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Name</b>
          <b>Email</b>
          <b>Status</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className="list-table-format">
            <p>{item.name}</p>
            <p>{item.email}</p>
            <div className="add-category-price">
          <div className="add-category flex-col">
            <select
              value={item.status}
              onChange={(event) => handleStatusChange(item._id, event)}
            >
              <option value={true}>Active</option>
              <option value={false}>Inactive</option>
            </select>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
