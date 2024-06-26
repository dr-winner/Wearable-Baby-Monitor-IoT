import React from 'react';
import Header from './components/Header';
import SensorData from './components/SensorData';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SensorData />
    </div>
  );
};

export default App;
