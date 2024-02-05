import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    legend: {
      position: 'top',
      align: 'start',
      labels: {
        boxWidth: 20,
        boxHeight: 20,
        font:{
          family: 'Raleway',
          size: 14,
        },
        color: 'black',
        
      }

    },
    title: {
      display: true,
      
    },
  },
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        color: 'black',
      },
      border: {
        color: 'black',
      },
      
      title: {
        display: true,
        text: 'Month (2023)',
        color: 'black',
        font: {
          family: 'Raleway',
          
        },
      }
    },
    y: {
      border: {
        color: 'black',
      },
      grid: {
        drawOnChartArea: false
      },
      ticks: {
        setSize: 5,
        color: 'black',
        
        
      },
      min: 40,
      max: 80,
      title: {
        display: true,
        text: 'AOV (£)',
        color: 'black',
        font: {
          family: 'DM Sans',
          
        },
      }
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];


export const data = {
  labels,
  datasets: [
    {
      label: 'Without efitter',
      data: [[42, 62], [42, 67], [42, 66], [42, 60], [42, 62], [42, 58]],
      backgroundColor: 'rgba(113, 46, 73, 1)',
      borderRadius: 5,
      borderSkipped: false,
    },
    {
      label: 'With efitter',
      data: [[42, 73], [42, 78], [42, 56], [42, 70], [42, 77], [42, 68]],
      backgroundColor: 'rgba(255, 217, 227, 1)',
      borderRadius: 5,
      borderSkipped: false,
    },
  ],
};



function App() {
  return <Bar options={options} data={data} style={{height:'300px', width:'128px'}}/>;
}

export default App
