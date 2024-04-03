import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const VerticalbarChart = () => {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    const data = {
        labels: labels,
        datasets: [
            {
                data: [5, 10, 5, 2, 20, 30, 25, 10, 5, 2, 20, 30, 45, 30],
                fill: false,
                hoverBackgroundColor: "rgb(255, 0, 0)"
            }
        ]
    };

    const options = {
        plugins: {
            datalabels: {
                display: false, // Hide the label
            },
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                display: false,
                grid: {
                    display: false // Remove background lines
                }
            },
            x: {
                grid: {
                    display: false // Remove background lines
                },
            }
        }
    };

    const style = {
        width: '900px',
        height: '400px',
        position: 'relative',
        bottom: '110px',
        left: '25px'
    }

    return (
        <div>
            <div style={style}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default VerticalbarChart;
