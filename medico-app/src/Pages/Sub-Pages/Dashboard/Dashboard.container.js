import styled from "styled-components";
import { Grid } from "semantic-ui-react";
import DashboardCardsContainer from "./Dashboard-components/Dashboard.cards";
import DashboardTableContainer from "./Dashboard-components/Dashboard.table";
import DashboardOverview from "./Dashboard-components/Dashboard.overview";
import DashboardRecentActivity from "./Dashboard-components/Dashboard.recentActivity";
import DashboardInbox from "./Dashboard-components/Dashboard.inbox";
import DashboardAppointmentoverview from "./Dashboard-components/Dashboard.appointmentoverview";

const DashboardOuterContainer = styled.section`
   padding: 0.5rem 0rem;
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
               <DashboardTableContainer />
            </Grid.Column>

            <Grid.Column
               mobile={16}
               tablet={6}
               computer={4}
               style={gridColumStyle}
            >
               <DashboardAppointmentoverview />
               <DashboardInbox />
            </Grid.Column>
         </Grid>
      </DashboardOuterContainer>
   );
};

export default Dashboard;
