import "./ChartBar.css";

const ChartBar = ({ label, value, maxValue }) => {
  let barFillHeaight = "0%";
  if (maxValue) barFillHeaight = Math.round((value / maxValue) * 100) + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeaight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
