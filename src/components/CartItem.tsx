import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/cartSlice';
import { CartItem as CartItemType } from '../redux/cartSlice';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const totalPrice = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div style={{ flex: 1 }}>
        <h3>{item.name}</h3>
        <p>${item.price} each</p>
      </div>
      <div className="quantity-controls">
        <button className="quantity-btn" onClick={() => handleQuantityChange(item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button className="quantity-btn" onClick={() => handleQuantityChange(item.quantity + 1)}>+</button>
      </div>
      <div style={{ textAlign: 'right', minWidth: '80px' }}>
        <p>${totalPrice}</p>
        <button 
          onClick={handleRemove}
          style={{ 
            background: 'transparent', 
            border: 'none', 
            color: 'red', 
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
