import styled from "styled-components";
import ActivityFeed from "../../../../Components/Dashboard-Component/ActivityFeed.component";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import ViewAllButton from "../../../../Components/Dashboard-Component/ViewAllButton.component";
import { ActivityData } from "../../../../Redux/Activity.data";

const DashboardRecentActivityContainer = styled.section`
   background-color: #fff;
   border-radius: 10px;
   padding: 1.5rem;
   margin-bottom: 2rem;
   border: 1px solid #eee;
`;
const ViewAllButtonContainer = styled.div`
   margin-top: 30px;
   display: flex;
   justify-content: right;
`;

const DashboardRecentActivity = () => {
   return (
      <DashboardRecentActivityContainer>
         <Titles title={"Recent Activities"} color={"#009CF4"} />
         {ActivityData.map((activities) => {
            const { id, activitySummary, activityDate } = activities;
            return (
               <ActivityFeed
                  key={id}
                  activitysummary={activitySummary}
                  activitydate={activityDate}
               />
            );
         })}
         <ViewAllButtonContainer>
            <ViewAllButton
               color={"#fff"}
               link={"/"}
               backgroundcolor={"#396CFF"}
            />
         </ViewAllButtonContainer>
      </DashboardRecentActivityContainer>
   );
};

export default DashboardRecentActivity;
