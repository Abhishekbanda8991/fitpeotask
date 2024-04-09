
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "./DoughnutChart.css"

const DoughnutChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [20, 30, 30],
                    backgroundColor: [
                        'pink',
                        'blue',
                        'lightgrey'
                    ],
                    borderColor: [
                        'pink',
                        'blue',
                        'lightgrey'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                cutout: 80
            }
        });

        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <div style={{width: '240px', height: '240px', display: 'block', marginLeft: 'auto', marginRight: "auto", position: 'relative', bottom: '2%'}}>
            <canvas ref={chartRef} />
        </div>
    );
};

export default DoughnutChart;
