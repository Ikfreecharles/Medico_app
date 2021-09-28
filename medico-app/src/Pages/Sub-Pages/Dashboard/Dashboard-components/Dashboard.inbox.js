import styled from "styled-components";
import SearchField from "../../../../Components/Dashboard-Component/Search.component";
import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import UserChatCard from "../../../../Components/Dashboard-Component/UserChatCard.component";
import { InboxData } from "../../../../Redux/Inbox.data";

const DashboardInboxContainer = styled.section`
   background-color: #fff;
   border-radius: 10px;
   border: 1px solid #eee;
`;

const DashboardInbox = () => {
   return (
      <DashboardInboxContainer>
         <Submenu submenulist={["Inbox", "Appointments", "Notifications"]} />
         <SearchField />
         {InboxData.map((inboxitems) => {
            const { id, fullname, messagepreview, useravatar, time } =
               inboxitems;
            return (
               <UserChatCard
                  key={id}
                  fullname={fullname}
                  messagepreview={messagepreview}
                  useravatar={useravatar}
                  color={"#355DCF"}
                  bordercolor={"#E8E8E8"}
                  time={time}
               />
            );
         })}
      </DashboardInboxContainer>
   );
};

export default DashboardInbox;
