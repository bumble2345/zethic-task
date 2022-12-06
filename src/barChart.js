import "./barChart.css";
function BarGroup(props) {
  let barPadding = 2;
  let barColour = "#348AA7";
  let widthScale = (d) => d * 1;

  let width = widthScale(props.d.count);
  let yMid = props.barHeight * 0.5;

  return (
    <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle">
        {props.d.country}
      </text>
      <rect
        y={barPadding * 0.5}
        width={width}
        height={props.barHeight - barPadding}
        fill={barColour}
      />
      <text
        className="value-label"
        x={width - 8}
        y={yMid}
        alignmentBaseline="middle"
      >
        {props.d.count}
      </text>
    </g>
  );
}

function BarChart(data) {
  const barHeight = 30;
  const barGroups = Array.from(data.data).map((d, i) => {
    return (
      <g transform={`translate(0, ${i * barHeight})`}>
        <BarGroup d={d} barHeight={barHeight} />
      </g>
    );
  });
  return (
    <svg width="1000" height="7500px">
      <g className="container">
        <g className="chart" transform="translate(400,60)">
          {barGroups}
        </g>
      </g>
    </svg>
  );
}

export default BarChart;
