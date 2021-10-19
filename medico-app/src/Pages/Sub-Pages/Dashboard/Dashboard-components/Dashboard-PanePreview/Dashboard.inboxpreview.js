//imports from within the project
import UserChatCard from "../../../../../Components/Dashboard-Component/UserChatCard.component";
import { InboxData } from "../../../../../Redux/Inbox.data";

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
                  color={"#797979"}
                  bordercolor={"#E8E8E8"}
                  time={time}
               />
            );
         })}
      </div>
   );
};

export default DashboardInboxpreview;
