import React, { useEffect, useState } from 'react';
import { fetchSensorData } from '../services/api.js';
import SensorCard from './SensorCard.js';  
import './SensorData.css';

const SensorData = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const sensorData = await fetchSensorData();
                setData(sensorData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="sensor-data">
            <SensorCard sensorName="Humidity" value={data.humidity?.[0]?.value} unit="%" backgroundColor="#4caf50" />
            <SensorCard sensorName="Motion" value={data.motion?.[0]?.value} unit="" backgroundColor="#ff9800" />
            <SensorCard sensorName="Temperature" value={data.temperature?.[0]?.value} unit="°C" backgroundColor="#f44336" />
            <SensorCard sensorName="Pulse" value={data.pulse?.[0]?.value} unit="bpm" backgroundColor="#2196f3" />
            <SensorCard sensorName="Blood Pressure" value={data.bloodPressure?.[0]?.value} unit="" backgroundColor="#9c27b0" />
            <SensorCard sensorName="Location" value={data.location?.[0]?.value} unit="" backgroundColor="#3f51b5" />
            <SensorCard sensorName="Light" value={data.light?.[0]?.value} unit="lx" backgroundColor="#795548" />
            <SensorCard sensorName="Sound" value={data.sound?.[0]?.value} unit="dB" backgroundColor="#607d8b" />
        </div>
    );
};

export default SensorData;
