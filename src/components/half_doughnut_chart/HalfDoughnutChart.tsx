import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Plugin } from 'chart.js';
import { IHalfDoughnutChart } from './HalfDoughnutChart.interfaces';

const HalfDoughnutChart = (props: IHalfDoughnutChart) => {
  const { text1, text2, textColor } = props;

  const doughnutCenterText: Plugin = {
    id: 'doughnutCenterText',
    beforeDraw: function (chart) {
      const ctx = chart.ctx;
      const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2 + 50;

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.font = 'bold 50px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText(text1, centerX, centerY - 30);

      ctx.font = 'bold 30px Arial';
      ctx.fillStyle = textColor;
      ctx.fillText(text2, centerX, centerY + 15);

      ctx.restore();
    },
  };

  const data = {
    datasets: [
      {
        data: [5, 0.2, 5, 0.2, 5, 0.2, 5, 0.2, 5, 0.2, 5],
        backgroundColor: [
          "#FF5656",
          "#FFFFFF",
          "#FF8888",
          "#FFFFFF",
          "#FEE114",
          "#FFFFFF",
          "#D1D80F",
          "#FFFFFF",
          "#84BD32",
          "#FFFFFF",
          "#30AD43",
        ]
      },
    ],
  };

  const options = {
    circumference: 180,
    rotation: -90,
    layout: {
      padding: 0,
    },
    responsive: true,
    maintainAspectRatio: false,
    cutout: 65,
    plugins: {
      doughnutCenterText: true
    }
  };

  Chart.register(ArcElement);  // Only register ArcElement globally

  return <Doughnut data={data} options={options as any} plugins={[doughnutCenterText] as any} />;
};

export default HalfDoughnutChart;
