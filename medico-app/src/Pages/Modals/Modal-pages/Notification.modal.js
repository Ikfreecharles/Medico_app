//imports from external libraries
import styled from "styled-components";
import ActivityFeed from "../../../Components/Dashboard-Component/ActivityFeed.component";

import Titles from "../../../Components/Dashboard-Component/Titles.component";
import ViewAllButton from "../../../Components/Dashboard-Component/ViewAllButton.component";
import ContainerComponent from "../../../Components/TopBar-Component/Container.component";
import { openNotification } from "../../../Redux/Modals/Modals.actions";

const ContainerComponentDiv = styled.div`
   position: absolute;
   right: 2rem;
   top: 6rem;
   border-radius: var(--border-radius);
   background-color: var(--main-white);
   padding: 1rem 1rem;
   z-index: 999;
   box-shadow: -4px 4px 11px -2px rgba(71, 159, 218, 0.11);
   -webkit-box-shadow: -4px 4px 11px -2px rgba(71, 159, 218, 0.11);
   -moz-box-shadow: -4px 4px 11px -2px rgba(71, 159, 218, 0.11);
`;

const TitleInnerDiv = styled.div`
   border-bottom: 1px solid var(--light-grey);
   padding: 0 0 0.5rem 0;
   margin: 0 0 0.5rem 0;
  
   }
`;

const NotificationDiv = styled.div`
   p {
      margin: 0;
   }
`;

const ViewAllButtonContainerDiv = styled.div`
   margin: 1rem 0 0 0;
   display: flex;
   justify-content: center;
`;

const NotificationModal = () => {
   return (
      <ContainerComponent action={openNotification}>
         <ContainerComponentDiv>
            <TitleInnerDiv>
               <Titles title={"Notifications"} color={"var(--main-blue)"} />
            </TitleInnerDiv>
            <NotificationDiv>
               <ActivityFeed
                  activitysummary={
                     "You created an appointment with Jake Duncan"
                  }
                  activitydate={"1 hour ago"}
               />
               <ActivityFeed
                  activitysummary={"You have an appointment in 2 hours"}
                  activitydate={"3 hours ago"}
               />
            </NotificationDiv>
            <ViewAllButtonContainerDiv>
               <ViewAllButton
                  color={"var(--main-white)"}
                  backgroundcolor={"var(--main-blue)"}
                  text={"View all".toUpperCase()}
               />
            </ViewAllButtonContainerDiv>
         </ContainerComponentDiv>
      </ContainerComponent>
   );
};

export default NotificationModal;
