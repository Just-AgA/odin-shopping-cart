import React from 'react';

const Home = () => {
  return (
    <div className="page home">
      <h1>Welcome to My Shop</h1>
      <p>Browse amazing products and add them to your cart.</p>
      <img
        src="https://placehold.co/800x300?text=Shopping+Cart+Project"
        alt="Shop banner"
        style={{ width: '100%', borderRadius: '8px' }}
      />
    </div>
  );
};

export default Home;
