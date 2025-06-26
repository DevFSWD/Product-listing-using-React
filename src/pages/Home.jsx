import React from 'react'

const Home = () => {
  return (
    <div
      className="p-6 text-center bg-cover bg-center min-h-[573px] flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: 'url(https://i.pinimg.com/736x/43/84/8b/43848b9291f8111755cc8beb83a271e6.jpg)'}}
    > 
      <h1 className="text-4xl font-bold mb-4">Welcome to Dev's E-Products</h1><br/>
      <p className="text-lg max-w-xl">
        Discover quality products and enjoy seamless shopping.</p>
    </div>
  );
};

export default Home