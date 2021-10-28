//imports from external libraries
import styled from "styled-components";
import { Grid } from "semantic-ui-react";

//imports from within the project
import DashboardCardsContainer from "./Dashboard-components/Dashboard.cards";
import DashboardTableContainer from "./Dashboard-components/Dashboard.table";
import DashboardOverview from "./Dashboard-components/Dashboard.overview";
import DashboardRecentActivity from "./Dashboard-components/Dashboard.recentActivity";
import DashboardInbox from "./Dashboard-components/Dashboard.inbox";
import DashboardAppointmentoverview from "./Dashboard-components/Dashboard.appointmentoverview";
import DashboardTodayoverview from "./Dashboard-components/Dashboard.todayoverview";

const DashboardOuterContainer = styled.section`
   padding: 0 0 0.4rem 0rem;
`;

const gridColumStyle = {
   padding: "0.4rem",
};

const Dashboard = () => {
   return (
      <DashboardOuterContainer>
         <DashboardCardsContainer />
         <Grid style={{ margin: "0" }}>
            <Grid.Column
               mobile={16}
               tablet={16}
               computer={12}
               style={gridColumStyle}
            >
               <DashboardOverview />
               <DashboardTodayoverview />
               <DashboardTableContainer />
            </Grid.Column>

            <Grid.Column
               mobile={16}
               tablet={6}
               computer={4}
               style={gridColumStyle}
            >
               <DashboardAppointmentoverview />
               <DashboardRecentActivity />
               <DashboardInbox />
            </Grid.Column>
         </Grid>
      </DashboardOuterContainer>
   );
};

export default Dashboard;
