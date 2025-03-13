import React, { useState, useEffect } from 'react';
import CustomerService from '../services/CustomerService';
import { useParams } from 'react-router-dom';

const EditCustomer = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({ name: '', address: '', phone: '' });

  useEffect(() => {
    CustomerService.getCustomers().then((response) => {
      const existingCustomer = response.data.find((c) => c.id === parseInt(id));
      if (existingCustomer) {
        setCustomer(existingCustomer);
      }
    });
  }, [id]);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const updateCustomer = () => {
    CustomerService.updateCustomer(id, customer).then(() => {
      alert('Cập nhật thành công!');
    });
  };

  return (
    <div>
      <h2>Sửa khách hàng</h2>
      <input type="text" name="name" value={customer.name} onChange={handleChange} />
      <input type="text" name="address" value={customer.address} onChange={handleChange} />
      <input type="text" name="phone" value={customer.phone} onChange={handleChange} />
      <button onClick={updateCustomer}>Cập nhật</button>
    </div>
  );
};

export default EditCustomer;
