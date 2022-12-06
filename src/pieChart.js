import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({labels,label,dataArr,backgroundColor}) {
    const data = {
        labels: labels,
        datasets: [
          {
            label: label,
            data: dataArr,
            backgroundColor: backgroundColor,
            borderColor: backgroundColor,
            borderWidth: 1,
          },
        ],
      };
  return <Pie data={data} />;
}
