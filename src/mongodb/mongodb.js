const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to the MongoDB server');
    } catch (error) {
        console.error('Error connecting to the MongoDB server:', error);
    }
}

// Function to insert sensor data into the database
async function insertSensorData(data) {
    try {
        const database = client.db('sensorDataDb');
        const collection = database.collection('sensorData');
        await collection.insertOne(data);
        console.log('Sensor data inserted into the database');
    } catch (error) {
        console.error('Error inserting sensor data into the database:', error);
    }
}

module.exports = { connectToDatabase, insertSensorData };
