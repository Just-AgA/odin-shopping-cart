import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        My Shop
      </Link>
      <div className="nav-links">
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
