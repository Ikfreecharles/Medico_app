import { Grid } from "semantic-ui-react";
import BigCard from "../../../../Components/Dashboard-Component/BigCard.component";
import BigCardChart from "../../../../Charts/BigCard.chart";
import { BigCardData } from "../../../../Redux/BigCard.data";
import PatientSummary from "../../../../Components/Dashboard-Component/PatientSummary.component";
import { PatientSummaryData } from "../../../../Redux/PatientSummary.data";
import PatientSummaryChart from "../../../../Charts/PatientSummary.chart";

const DashboardOverview = () => {
   return (
      <Grid columns={2}>
         <Grid.Column mobile={16} tablet={12} computer={10}>
            <PatientSummary
               title={"Patient Summary"}
               headingcolor={"#00D0E9"}
               backgroundcolor={"#fff"}
               width={"100%"}
               patientsummarychart={
                  <PatientSummaryChart
                     patientsummarydata={PatientSummaryData}
                     chartwidth={"100%"}
                     chartheight={"100%"}
                     legendposition={"none"}
                     chartbackgroundcolor={"none"}
                     chartareawidth={"90%"}
                     chartareaheight={"80%"}
                     chartlinecolor={"#fff"}
                     topdistance={"none"}
                  />
               }
            />
         </Grid.Column>
         <Grid.Column mobile={16} tablet={4} computer={6}>
            <BigCard
               heading={"Monthly Overview"}
               cardnumber={84}
               subtitle={"Patients this month"}
               cardpercentage={"20% less"}
               cardpercentagesubtitle={"than last month"}
               cardnumbercolor={"#92D7FF"}
               cardpercentagesubtitlecolor={"#6F94FF"}
               width={"100%"}
               backgroundcolor={"#042993"}
               bigcardchart={<BigCardChart chartdata={BigCardData} />}
            />
         </Grid.Column>
      </Grid>
   );
};

export default DashboardOverview;
