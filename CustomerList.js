import React, { useEffect, useState } from 'react';
import CustomerService from '../services/CustomerService';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = () => {
    CustomerService.getCustomers().then((response) => {
      setCustomers(response.data);
    });
  };

  const deleteCustomer = (id) => {
    CustomerService.deleteCustomer(id).then(() => {
      loadCustomers();
    });
  };

  return (
    <div>
      <h2>Danh sách khách hàng</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.address}</td>
              <td>{customer.phone}</td>
              <td>
                <button onClick={() => deleteCustomer(customer.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
