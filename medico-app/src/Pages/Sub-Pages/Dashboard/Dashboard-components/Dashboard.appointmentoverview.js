//imports from external libraries
import { useState } from "react";
import styled from "styled-components";

//imports from within the project
import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import AppointmentMonthly from "./Dashboard-appointmentoverview/Appointment.monthly";
import AppointmentQuarterly from "./Dashboard-appointmentoverview/Appointment.quarterly";
import AppointmentWeekly from "./Dashboard-appointmentoverview/Appointment.weekly";
import AppointmentYearly from "./Dashboard-appointmentoverview/Appointment.yearly";

const DashboardAppointmentOverviewContainer = styled.section`
   background-color: #fff;
   border-radius: 3px;
   border: 1px solid #eee;
   padding: 1rem;
`;

const SubmenuContainer = styled.div`
   margin: 2rem 0;
`;

const submenu = [
   { id: "1", title: "Weekly" },
   { id: "2", title: "Monthly" },
   { id: "3", title: "Quarterly" },
   { id: "4", title: "Yearly" },
];

const DashboardAppointmentoverview = () => {
   const [submenuTitle, setsubmenuTitle] = useState(submenu[0].id);

   return (
      <DashboardAppointmentOverviewContainer>
         <Titles title={"Appointment Overview"} color={"#306EF6"} />
         <SubmenuContainer>
            <Submenu
               submenulist={submenu}
               width={"100%"}
               setState={setsubmenuTitle}
            />
         </SubmenuContainer>
         {submenuTitle === submenu[0].id && <AppointmentWeekly />}
         {submenuTitle === submenu[1].id && <AppointmentMonthly />}
         {submenuTitle === submenu[2].id && <AppointmentQuarterly />}
         {submenuTitle === submenu[3].id && <AppointmentYearly />}
      </DashboardAppointmentOverviewContainer>
   );
};

export default DashboardAppointmentoverview;
