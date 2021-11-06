//imports from external libraries
import { useState } from "react";
import styled from "styled-components";

//imports from within the projects
import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import DashboardAppointmentpreview from "./Dashboard-PanePreview/Dashboard.appointmentpreview";
import DashboardInboxpreview from "./Dashboard-PanePreview/Dashboard.inboxpreview";
import DashboardNotificationspreview from "./Dashboard-PanePreview/Dashboard.notificationspreview";

const DashboardInboxContainer = styled.section`
   background-color: var(--main-white);
   border-radius: var(--border-radius);
   margin-top: 0.8rem;
`;

const submenu = [
   { id: "1", title: "Inbox" },
   { id: "2", title: "Appointments" },
   { id: "3", title: "Notifications" },
];

const DashboardInbox = () => {
   const [submenuTitle, setsubmenuTitle] = useState(submenu[0].id);
   return (
      <DashboardInboxContainer>
         <div style={{ padding: "1rem" }}>
            <Submenu
               submenulist={submenu}
               width={"100%"}
               setState={setsubmenuTitle}
            />
         </div>
         {submenuTitle === submenu[0].id && <DashboardInboxpreview />}
         {submenuTitle === submenu[1].id && <DashboardAppointmentpreview />}
         {submenuTitle === submenu[2].id && <DashboardNotificationspreview />}
      </DashboardInboxContainer>
   );
};

export default DashboardInbox;
