//imports from external libraries
import styled from "styled-components";

//imports from within the project
import UserChatCard from "../../../../../Components/Dashboard-Component/UserChatCard.component";
import ViewAllButton from "../../../../../Components/Dashboard-Component/ViewAllButton.component";
import { InboxData } from "../../../../../Redux/Inbox.data";

const ViewButtonDiv = styled.div`
   padding: 1.5rem 0;
   display: flex;
   justify-content: center;
`;

const DashboardInboxpreview = () => {
   return (
      <div>
         {InboxData.map((inboxitems) => {
            const { id, fullname, messagepreview, useravatar, time } =
               inboxitems;
            return (
               <UserChatCard
                  key={id}
                  fullname={fullname}
                  messagepreview={messagepreview}
                  useravatar={useravatar}
                  color={"var(--main-grey)"}
                  bordercolor={"var(--light-grey)"}
                  time={time}
               />
            );
         })}
         <ViewButtonDiv>
            <ViewAllButton
               color={"var(--main-white)"}
               link={"Chat"}
               backgroundcolor={"var(--main-blue)"}
               text={"View all".toUpperCase()}
               icon={true}
            />
         </ViewButtonDiv>
      </div>
   );
};

export default DashboardInboxpreview;
