import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./VerticalBarChart.css"


const VerticalbarChart = () => {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    const data = {
        labels: labels,
        datasets: [
            {
                data: [25, 10, 5, 2, 20, 30, 25, 10, 5, 2, 20, 30, 45, 30],
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


    return (
        <div className="col-md-8" style={{width: '88%', marginLeft: 'auto', marginRight: 'auto', position: 'relative', bottom: '30%'}}>
            <Bar data={data} options={options}/>
        </div>
    );
};

export default VerticalbarChart;
