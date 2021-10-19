//imports from external libraries
import { Chart } from "react-google-charts";

//imports from within the project
import { pieChartOptions } from "../../../../../Charts/PieChart.options";

const chartData = [
   ["gender", "percentage"],
   ["Men", 38],
   ["Women", 24],
   ["Kids", 23],
   ["Others", 15],
];

const AppointmentWeekly = () => {
   return (
      <Chart
         width={"100%"}
         height={"100%"}
         chartType="PieChart"
         loader={<div>Loading Chart</div>}
         data={chartData}
         options={pieChartOptions}
      />
   );
};

export default AppointmentWeekly;
