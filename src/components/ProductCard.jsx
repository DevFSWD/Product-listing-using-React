import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-80 h-40 object-cover mb-4 rounded"
      />
      <h2 className="font-bold text-lg mb-2">{product.name}</h2>
      <p className="text-gray-600">₹ {product.price}</p>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-yellow-500">Rating: {product.rating}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;