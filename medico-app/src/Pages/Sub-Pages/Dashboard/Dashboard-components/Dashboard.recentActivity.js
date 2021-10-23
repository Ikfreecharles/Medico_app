import styled from "styled-components";
import ActivityFeed from "../../../../Components/Dashboard-Component/ActivityFeed.component";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import ViewAllButton from "../../../../Components/Dashboard-Component/ViewAllButton.component";
import { ActivityData } from "../../../../Redux/Activity.data";

const DashboardRecentActivityContainer = styled.section`
   background-color: var(--main-white);
   padding: 1.5rem;
   margin: 0.8rem 0;
   border-radius: var(--border-radius);
`;
const ViewAllButtonContainer = styled.div`
   margin-top: 1rem;
   display: flex;
   justify-content: center;
`;

const DashboardRecentActivity = () => {
   return (
      <DashboardRecentActivityContainer>
         <Titles title={"Recent Activities"} color={"#479FDA"} />
         {ActivityData.map((activities) => {
            const { id, activitySummary, activityDate, activityType } =
               activities;
            return (
               <ActivityFeed
                  key={id}
                  activitysummary={activitySummary}
                  activitydate={activityDate}
                  activityType={activityType}
               />
            );
         })}
         <ViewAllButtonContainer>
            <ViewAllButton
               color={"var(--main-white)"}
               link={"Appointments"}
               backgroundcolor={"var(--main-blue)"}
               text={"View all".toUpperCase()}
               icon={true}
            />
         </ViewAllButtonContainer>
      </DashboardRecentActivityContainer>
   );
};

export default DashboardRecentActivity;
