//imports from external libraries
import { useState } from "react";
import styled from "styled-components";

//imports from within the projects
import SearchField from "../../../../Components/Dashboard-Component/Search.component";
import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import UserChatCard from "../../../../Components/Dashboard-Component/UserChatCard.component";
import { InboxData } from "../../../../Redux/Inbox.data";

const DashboardInboxContainer = styled.section`
   background-color: #fff;
   border-radius: 0px;
   border: 1px solid #eee;
`;

const DashboardInbox = () => {
   const [submenuTitle, setsubmenuTitle] = useState("");
   return (
      <DashboardInboxContainer>
         <div style={{ padding: "1rem" }}>
            <Submenu
               submenulist={[
                  { id: "1", title: "Inbox" },
                  { id: "2", title: "Appointments" },
                  { id: "3", title: "Notifications" },
               ]}
               width={"100%"}
               setState={setsubmenuTitle}
            />
            <div style={{ margin: "0.5rem 0" }}>
               <SearchField />
            </div>
         </div>
         {InboxData.map((inboxitems) => {
            const { id, fullname, messagepreview, useravatar, time } =
               inboxitems;
            return (
               <UserChatCard
                  key={id}
                  fullname={fullname}
                  messagepreview={messagepreview}
                  useravatar={useravatar}
                  color={"#797979"}
                  bordercolor={"#E8E8E8"}
                  time={time}
               />
            );
         })}
      </DashboardInboxContainer>
   );
};

export default DashboardInbox;
