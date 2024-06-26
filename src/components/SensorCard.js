import React from 'react';
import './SensorCard.css';

const SensorCard = ({ sensorName, value, unit, backgroundColor, sensorNameColor, valueColor }) => {
    return (
        <div className="sensor-card" style={{ backgroundColor }}>
            <h3 style={{ backgroundColor: sensorNameColor }}>{sensorName}</h3>
            <p style={{ color: valueColor }}>{value} {unit}</p>
        </div>
    );
};

export default SensorCard;
