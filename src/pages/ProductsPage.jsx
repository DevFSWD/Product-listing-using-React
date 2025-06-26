import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import productsData from '../data/products';

const ProductsPage = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('All')
  const [sortOption, setSortOption] = useState('')
  const navigate = useNavigate()

  const filteredProducts = productsData
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      category === 'All' ? true : product.category === category
    )
    .sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price
      if (sortOption === 'price-desc') return b.price - a.price
      if (sortOption === 'rating') return b.rating - a.rating
      return 0;
    });

  return (
    <div>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
        sortOption={sortOption}
        setSortOption={setSortOption}/>

      <h3 className="text-4xl font-bold text-center mt-6 mb-4"><u>Our Products</u></h3>

      <ProductList products={filteredProducts} onAddToCart={onAddToCart}/>

      <div className="p-6 text-right">
        <button
          onClick={() => navigate('/cart')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          
          Go to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsPage