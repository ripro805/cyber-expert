import React from 'react';
import './Expert.css';

const Expert = ({ expert, addToCart }) => {
  return (
    <div className="expert-card">
      <img className="expert-img" src={expert.image} alt={expert.name} />
      <h2 className="expert-name">{expert.name}</h2>
      <div className="expert-info">
        <div>Age: {expert.age}</div>
        <div>Designation: {expert.designation}</div>
        <div>Address: {expert.address}</div>
        <div>Salary: ${expert.salary}</div>
      </div>
      <button className="add-btn" onClick={() => addToCart(expert)}>
        Add to List
      </button>
    </div>
  );
};

export default Expert;
