import { connectToDatabase, insertSensorData } from './mongodb';

// Connect to the MongoDB database
connectToDatabase();

// Example: Insert sensor data into the database
const sensorData = {
  sensorName: 'Humidity',
  value: 50,
  unit: '%',
  timestamp: new Date(),
};

insertSensorData(sensorData);
