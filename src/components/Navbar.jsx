import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dev's OS Store</h1>
      <strong><ul className="flex space-x-10">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/products" className="hover:underline">Products</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
      </ul></strong>
    </nav>
  );
};

export default Navbar;