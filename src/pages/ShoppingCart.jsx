import React from 'react';
import './Shopping.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateQuantity, removeItem, clearCart } from '../store/cartSlice';
import { FaTrash } from 'react-icons/fa';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.items);

  const changeQuantity = (id, qty) => {
    if (qty <= 0) {
      dispatch(removeItem(id));
    } else {
      dispatch(updateQuantity({ id, quantity: qty }));
    }
  };

  const total = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
  const quantity = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="shopping-container">
      {/* Header */}
      <header className="shopping-header">
        <h1>Your Shopping Cart</h1>
        <span className="badge">{quantity} items</span>
      </header>

      {/* Cart Content */}
      <div className="cart">
        {Object.values(cart).length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-list">
              {Object.values(cart).map((item) => (
                <li key={item.id} className="cart-item">
                  <img
                    src={item.thumbnail || 'https://via.placeholder.com/100'}
                    alt={item.name} onClick={() => navigate(`/product/${item.id}`)}
                    className='item-img cursor-pointer'
                  />
                  <div className="info">
                    <div className='item-title'>{item.title}</div>
                    <div>${(item.price * item.quantity).toLocaleString()}</div>
                  </div>

                  <div className="quantity-control">
                    <button onClick={() => changeQuantity(item.id, item.quantity - 1)}>-</button>
                    <div className="count">{item.quantity}</div>
                    <button onClick={() => changeQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>

            <div className="total">Total: ${total.toLocaleString()}</div>
          </>
        )}

        {/* Buttons */}
        <div className="checkout">
          <div
            style={{ background: '#ccc', cursor: 'pointer' }}
            onClick={() => {
              navigate('/');
            }}
          >
            Back to Home
          </div>
          {Object.values(cart).length > 0 && (
            <div
              style={{ background: '#e91e63', cursor: 'pointer' }}
              onClick={() => {
                dispatch(clearCart());
                alert('Checkout clicked');
              }}
            >
              Checkout
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
