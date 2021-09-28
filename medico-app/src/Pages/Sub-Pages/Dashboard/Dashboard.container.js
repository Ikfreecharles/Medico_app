import styled from "styled-components";
import { Grid } from "semantic-ui-react";
import DashboardCardsContainer from "./Dashboard-components/Dashboard.cards";
import DashboardTableContainer from "./Dashboard-components/Dashboard.table";
import DashboardOverview from "./Dashboard-components/Dashboard.overview";
import DashboardRecentActivity from "./Dashboard-components/Dashboard.recentActivity";
import DashboardInbox from "./Dashboard-components/Dashboard.inbox";

const DashboardOuterContainer = styled.section``;

const DashboardInnerContainer = styled.section`
   padding: 2rem;
`;

const Dashboard = () => {
   return (
      <DashboardOuterContainer>
         <DashboardInnerContainer>
            <Grid>
               <Grid.Column mobile={16} tablet={16} computer={12}>
                  <DashboardOverview />
                  <DashboardCardsContainer />
                  <DashboardTableContainer />
               </Grid.Column>

               <Grid.Column mobile={16} tablet={6} computer={4}>
                  <DashboardRecentActivity />
                  <DashboardInbox />
               </Grid.Column>
            </Grid>
         </DashboardInnerContainer>
      </DashboardOuterContainer>
   );
};

export default Dashboard;
