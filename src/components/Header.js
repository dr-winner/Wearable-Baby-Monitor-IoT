import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Wearable Baby Monitor</h1>
      <h2 className="subtitle">Real-time monitoring of your baby's vital signs and movements</h2>
      <p className="description">This project offers a user-friendly interface that keeps parents, 
        doctors, and caregivers connected with real-time data on the baby’s health and vitals, all 
        through a convenient cloud-based dashboard.</p>
    </header>
  );
};

export default Header;
