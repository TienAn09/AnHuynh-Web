// src/components/Card.js
import React from 'react';
import './Card.css';

function Card({ orientation, title, content }) {
  return (
    <div className={`card ${orientation}`}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Card;