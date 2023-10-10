import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const maxTotal = Math.max(...dataPoints.map((item) => item.value));
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maxTotal}
        />
      ))}
    </div>
  );
};

export default Chart;
