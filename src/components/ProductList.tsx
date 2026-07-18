import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { products, Product } from '../data/products';
import { RootState } from '../redux/store';
// Styles are defined in App.css

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === category));
    }
  };

  const isInCart = (productId: number) => {
    return cartItems.some(item => item.id === productId);
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    }));
  };

  return (
    <div className="product-list">
      <div className="category-filters" style={{ display: 'flex', gap: '10px', marginBottom: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryFilter(cat)}
            style={{
              padding: '10px 20px',
              borderRadius: '20px',
              border: activeCategory === cat ? '2px solid #2e7d32' : '1px solid #ccc',
              background: activeCategory === cat ? '#2e7d32' : 'white',
              color: activeCategory === cat ? 'white' : '#333',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {categories.slice(1).map(category => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="products-grid">
            {filteredProducts
              .filter(p => p.category === category || activeCategory === 'All')
              .map(product => {
                const inCart = isInCart(product.id);
                return (
                  <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p>${product.price}</p>
                      <button 
                        className="add-to-cart"
                        onClick={() => handleAddToCart(product)}
                        disabled={inCart}
                      >
                        {inCart ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
