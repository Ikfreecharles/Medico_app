import { Chart } from "react-google-charts";

const options = {
   hAxis: {
      gridlines: { count: 0, minSpacing: 30 },
      textStyle: { color: "#1851F2" },
      baseline: 16.8,
      baselineColor: "none",
   },
   vAxis: {
      gridlines: { count: 0 },
      baseline: 0,
      baselineColor: "none",
   },
   series: { 0: { curveType: "function" } },
   legend: "none",
   animation: {
      startup: true,
      duration: 1000,
      easing: "out",
   },
   backgroundColor: "none",
   lineWidth: 4,
   chartArea: {
      width: "95%",
      height: "90%",
      top: "1",
   },
   colors: ["#1851F2"],
};

const BigCardChart = ({ chartdata }) => {
   return (
      <>
         <Chart
            width={"100%"}
            height={"100%"}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={chartdata}
            options={options}
            legendToggle
         />
      </>
   );
};

export default BigCardChart;
