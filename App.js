import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import AddCustomer from './components/AddCustomer';
import EditCustomer from './components/EditCustomer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/add" element={<AddCustomer />} />
        <Route path="/edit/:id" element={<EditCustomer />} />
      </Routes>
    </Router>
  );
}

export default App;
