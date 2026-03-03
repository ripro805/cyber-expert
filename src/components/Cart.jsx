import React from 'react';
import './Cart.css';

const Cart = ({ cart, setCart }) => {
  const totalCost = cart.reduce((sum, expert) => sum + Number(expert.salary), 0);
  const handleConfirm = () => {
    setCart([]);
  };
  return (
    <aside className="cart-panel">
      <h3>Expert Added: {cart.length}</h3>
      <h4>Total Cost: ${totalCost}</h4>
      <div className="cart-list">
        {cart.map(expert => (
          <div className="cart-expert" key={expert.id}>
            <img className="cart-img" src={expert.image} alt={expert.name} />
            <span>{expert.name}</span>
          </div>
        ))}
      </div>
      <button className="confirm-btn" onClick={handleConfirm}>Confirm List</button>
    </aside>
  );
};

export default Cart;
