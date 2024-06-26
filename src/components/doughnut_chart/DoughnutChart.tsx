// src/App.js
import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Plugin } from 'chart.js';
import { IDoughnutChart } from './IDoughnutChart';

const DoughnutChart = (props: IDoughnutChart) => {
  const { value, maxValue } = props;

  const doughnutCenterText: Plugin = {
    id: 'doughnutCenterText',
    beforeDraw: function (chart) {
      const ctx = chart.ctx;
      const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2 + 30;

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.font = 'bold 20px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText(`${value} / ${maxValue}`, centerX, centerY - 30);

      ctx.restore();
    },
  };
  
  const data = {
    datasets: [
      {
        data: [value, (maxValue - (value > maxValue ? maxValue : value))],
        backgroundColor: [
          'rgba(0, 151, 218, 1)',
          'rgba(0, 151, 218, 0.4)',
        ],
        borderColor: [
          'rgba(0, 151, 218, 0)',
        ],
      },
    ],
  };

  const options = {
    cutout: '70%',
    layout: {
      padding: 0,
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      doughnutCenterText: true
    }
  };

  Chart.register(ArcElement);

  return <Doughnut data={data} options={options as any} plugins={[doughnutCenterText] as any} />;
};

export default DoughnutChart;
