import { Chart } from "react-google-charts";

const options = (
   legendposition,
   chartbackgroundcolor,
   chartareawidth,
   chartareaheight,
   chartlinecolor,
   topdistance
) => ({
   hAxis: {
      textStyle: { color: "#1851F2" },

      baselineColor: "none",
   },
   vAxis: {
      baseline: 0,
      baselineColor: "none",
   },
   series: {
      0: { curveType: "function" },
      1: { curveType: "function" },
      2: { curveType: "function" },
   },
   legend: `${legendposition}`,
   animation: {
      startup: true,
      duration: 1000,
      easing: "out",
   },
   backgroundColor: `${chartbackgroundcolor}`,
   lineWidth: 3,
   chartArea: {
      width: `${chartareawidth}`,
      height: `${chartareaheight}`,
      top: `${topdistance}`,
   },
   // colors: [`${chartlinecolor}`],
});

const PatientSummaryChart = ({
   patientsummarydata,
   chartwidth,
   chartheight,
   legendposition,
   chartbackgroundcolor,
   chartareawidth,
   chartareaheight,
   chartlinecolor,
   topdistance,
}) => {
   return (
      <>
         <Chart
            width={`${chartwidth}`}
            height={`${chartheight}`}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={patientsummarydata}
            options={options(
               legendposition,
               chartbackgroundcolor,
               chartareawidth,
               chartareaheight,
               chartlinecolor,
               topdistance
            )}
            legendToggle
         />
      </>
   );
};

export default PatientSummaryChart;
