import React from 'react';
import { Bar } from 'react-chartjs-2';
import  {Chart as ChartJS} from 'chart.js/auto';

const Graph = ({ chartdata }) => {
  return (
    <div>
      <Bar data={chartdata} />
    </div>
  );
};

export default Graph;
