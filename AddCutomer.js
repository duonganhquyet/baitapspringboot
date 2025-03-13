import React, { useState } from 'react';
import CustomerService from '../services/CustomerService';

const AddCustomer = () => {
  const [customer, setCustomer] = useState({ name: '', address: '', phone: '' });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const saveCustomer = () => {
    CustomerService.addCustomer(customer).then(() => {
      alert('Thêm khách hàng thành công!');
    });
  };

  return (
    <div>
      <h2>Thêm khách hàng</h2>
      <input type="text" name="name" placeholder="Tên" onChange={handleChange} />
      <input type="text" name="address" placeholder="Địa chỉ" onChange={handleChange} />
      <input type="text" name="phone" placeholder="Số điện thoại" onChange={handleChange} />
      <button onClick={saveCustomer}>Lưu</button>
    </div>
  );
};

export default AddCustomer;
