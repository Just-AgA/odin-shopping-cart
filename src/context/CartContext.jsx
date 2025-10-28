import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: {},
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, quantity } = action.payload;
      const existing = state.items[product.id] || { ...product, quantity: 0 };
      const newQuantity = existing.quantity + quantity;
      return {
        ...state,
        items: {
          ...state.items,
          [product.id]: { ...product, quantity: newQuantity },
        },
      };
    }
    
  }
}


};

export const useCart = () => useContext(CartContext);
