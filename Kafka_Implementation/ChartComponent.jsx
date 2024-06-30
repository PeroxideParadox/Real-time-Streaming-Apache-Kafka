// ChartComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const ChartComponent = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/data');
                const fetchedData = response.data;

                const labels = fetchedData.map(item => item.location);
                const co2Levels = fetchedData.map(item => item.co2_level);

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'CO2 Level',
                            data: co2Levels,
                            fill: false,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderWidth: 1
                        }
                    ]
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); 
    }, []);

    return (
        <div>
            <h2>CO2 Level Chart</h2>
            <div style={{ height: '500px', width: '800px' }}>
                <Line data={chartData} />
            </div>
        </div>
    );
};

export default ChartComponent;
