import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {

    const data = {

        datasets: [
            {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                data: [8, 19, 13],
                backgroundColor: [
                    'pink',
                    'blue',
                    'lightgrey',

                ],
                borderColor: [
                    'pink',
                    'blue',
                    'lightgrey',

                ],
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        cutout: '70%',
    };

    const style = {
        width: '270px',
        height: '270px',
        position: 'relative',
        left: '42px',
        bottom: '120px',
    }

    return (
        <div>
            <div style={style}>
                <Doughnut data={data} options={options} />
            </div>
        </div>
    )
}

export default DoughnutChart;
