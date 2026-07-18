import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'plants' | 'cart'>('home');
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const navigateTo = (page: 'home' | 'plants' | 'cart') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>🌿</div>
          <h1 style={{ margin: 0 }}>e-plantshopping</h1>
        </div>
        <div className="nav-links">
          <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('plants'); }}>Plants</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('cart'); }} className="cart-icon">
            🛒 
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </a>
        </div>
      </nav>

      {currentPage === 'home' && (
        <div className="landing">
          <div className="landing-content">
            <h1>Welcome to e-plantshopping</h1>
            <p>Discover beautiful plants for your home</p>
            <button className="get-started" onClick={() => navigateTo('plants')}>
              Get Started
            </button>
          </div>
        </div>
      )}

      {currentPage === 'plants' && (
        <>
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Our Plant Collection</h1>
            <p>Browse our selection of premium houseplants</p>
          </div>
          <ProductList />
        </>
      )}

      {currentPage === 'cart' && (
        <div className="cart-page">
          <h1>Your Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem' }}>
              <p>Your cart is empty. Start shopping!</p>
              <button 
                className="get-started" 
                onClick={() => navigateTo('plants')}
                style={{ marginTop: '1rem' }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
              <div className="total">
                Total: ${totalPrice}
              </div>
              <button 
                className="checkout-btn"
                onClick={() => alert('Coming Soon! Checkout functionality in progress.')}
              >
                Proceed to Checkout
              </button>
              <button 
                style={{ 
                  background: 'transparent', 
                  border: '1px solid #4caf50', 
                  color: '#4caf50',
                  padding: '1rem 2rem',
                  margin: '1rem auto',
                  display: 'block',
                  borderRadius: '50px',
                  cursor: 'pointer'
                }}
                onClick={() => navigateTo('plants')}
              >
                Continue Shopping
              </button>
            </>
          )}
        </div>
      )}

      {currentPage === 'home' && (
        <AboutUs />
      )}
    </div>
  );
};

export default App;
