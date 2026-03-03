import React, { useEffect, useState } from 'react';
import Expert from './components/Expert';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [experts, setExperts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/expert.json')
      .then(res => res.json())
      .then(data => setExperts(data));
  }, []);

  const addToCart = (expert) => {
    if (!cart.find(e => e.id === expert.id)) {
      setCart([...cart, expert]);
    }
  };

  return (
    <div className="app-container">
      <header className="banner">
        <h1>Make a Cyber Security Team</h1>
        <p>Our server is under attack so we need to hire a special cyber security team</p>
        <div className="budget">Total Budget: <b>10 Million</b></div>
      </header>
      <div className="main-layout">
        <div className="experts-grid">
          {experts.map(expert => (
            <Expert key={expert.id} expert={expert} addToCart={addToCart} />
          ))}
        </div>
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default App;
