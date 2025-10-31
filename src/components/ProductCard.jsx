import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });
    setQuantity(1);
  };
};

export default ProductCard;
