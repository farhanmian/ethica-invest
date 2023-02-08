import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const initChartdata = {
  labels: [""],
  datasets: [
    {
      label: "",
      data: [0],
      backgroundColor: "#6D27E8",
      borderWidth: 2,
      borderColor: "#ccc",
    },
  ],
};

const BarChart: React.FC<{
  chartData: { data: { ticker: string; price: number }[] };
}> = ({ chartData }) => {
  const [lineChartData, setLineChartData] = useState<typeof initChartdata>();

  useEffect(() => {
    if (!chartData || !chartData.data) return;

    const dataCopy = { ...initChartdata };
    const labels: string[] = [];
    const priceData: number[] = [];

    chartData.data.forEach((item) => {
      labels.push(item.ticker);
      priceData.push(item.price);
    });

    dataCopy.labels = labels;
    dataCopy.datasets[0].data = priceData;

    setLineChartData(dataCopy);
  }, [chartData]);

  return <>{lineChartData && <Bar options={options} data={lineChartData} />}</>;
};

export default BarChart;
