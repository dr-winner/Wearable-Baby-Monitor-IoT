export const fetchSensorData = async () => {
    const urls = [
        'https://api.waziup.io/api/v2/devices/humTempDev101/sensors/hum101/values',
        'https://api.waziup.io/api/v2/devices/humTempDev101/sensors/mot101/values',
        'https://api.waziup.io/api/v2/devices/humTempDev101/sensors/temp101/values'
    ];

    try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch sensor data');
            }
            return response.json();
        }));

        return {
            humidity: data[0],
            motion: data[1],
            temperature: data[2]
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
