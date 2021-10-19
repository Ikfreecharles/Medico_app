//imports from external libraries
import { Chart } from "react-google-charts";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

//imports from within the project
import PatientSummary from "../../../../Components/Dashboard-Component/PatientSummary.component";
import { PatientSummaryData } from "../../../../Redux/PatientSummary.data";
import { comboChartOptions } from "../../../../Charts/ComboChart.options";

const DashboardOverview = () => {
   return (
      <PatientSummary
         title={"Patient Summary"}
         headingcolor={"#306EF6"}
         backgroundcolor={"#fff"}
         width={"100%"}
         patientsummarychart={
            <Chart
               width={"100%"}
               chartType="ComboChart"
               loader={
                  <Box sx={{ display: "flex" }}>
                     <CircularProgress />
                  </Box>
               }
               data={PatientSummaryData}
               options={comboChartOptions}
            />
         }
      />
   );
};

export default DashboardOverview;
