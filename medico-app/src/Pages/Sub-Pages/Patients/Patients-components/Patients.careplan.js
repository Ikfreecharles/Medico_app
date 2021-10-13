//import from external libraries
import { useState } from "react";
import styled from "styled-components";

//import from within the project
import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import PatientActivitiesGoals from "./Patient-vitals//Patient-vitals-subfolder/Patient.activitiesGoals";
import PatientTask from "./Patient-vitals//Patient-vitals-subfolder/Patient.task";

const PatientCareplanContainerDiv = styled.section`
   padding: 1rem;
   background-color: #fff;
   border-radius: 1rem;
   margin-top: 0.8rem;
`;

const PatientsCareplan = () => {
   const [submenuTitle, setSubmenuTitle] = useState("");
   console.log(submenuTitle);
   return (
      <PatientCareplanContainerDiv>
         <Titles title={"Care Plan"} color={"#355DCF"} />

         <div style={{ marginTop: "1rem" }}>
            <Submenu
               submenulist={[
                  { id: "1", title: "Activities & Goal" },
                  { id: "2", title: "Task Only" },
               ]}
               width={"40%"}
               setState={setSubmenuTitle}
            />
         </div>
         {submenuTitle === "Activities & Goal" ? (
            <PatientActivitiesGoals />
         ) : submenuTitle === "Task Only" ? (
            <PatientTask />
         ) : (
            <PatientActivitiesGoals />
         )}
      </PatientCareplanContainerDiv>
   );
};

export default PatientsCareplan;
