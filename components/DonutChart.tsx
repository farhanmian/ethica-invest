import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

const initChartData = {
  labels: [""],
  datasets: [
    {
      label: "# stocks",
      data: [0],
      backgroundColor: [
        "#3F53EC",
        "#9371F0",
        "#FF9768",
        "#FFD04C",
        "rgba(153, 102, 255, 0.8)",
        "rgba(255, 159, 64, 0.8)",
      ],
      borderColor: "#ccc",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const DonutChart: React.FC<{ chartData: { data: { sector: string }[] } }> = ({
  chartData,
}) => {
  const [donutChartData, setDonutChartData] = useState<typeof initChartData>();

  useEffect(() => {
    if (!chartData || !chartData.data) return;

    const dataCopy = { ...initChartData };
    dataCopy.labels = [];
    dataCopy.datasets[0].data = [];

    chartData.data.forEach((item, i) => {
      const count = chartData.data.filter(
        (data) => data.sector === item.sector
      );

      if (!dataCopy.labels.find((data) => data === item.sector)) {
        // donutData.push({ sector: item.sector, noOfStocks: count.length });
        dataCopy.labels.push(item.sector);
        dataCopy.datasets[0].data.push(count.length);
      }
    });
    console.log(dataCopy);

    setDonutChartData(dataCopy);
  }, [chartData]);
  return (
    <>
      {donutChartData && <Doughnut data={donutChartData} options={options} />}
    </>
  );
};

export default DonutChart;
