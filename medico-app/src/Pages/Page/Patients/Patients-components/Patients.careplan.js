//import from external libraries
import { useState } from "react";
import styled from "styled-components";

//import from within the project
import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import PatientActivitiesGoals from "./Patient-careplan/Patient.activitiesGoals";
import PatientTask from "./Patient-careplan/Patient.task";
import { ACTIVITIES_SUBMENU } from "../../../../Inputs/Patient-inputs/Patients.input";

const PatientCareplanContainerDiv = styled.section`
   padding: 2rem;
   background-color: var(--main-white);
   border-radius: var(--border-radius);
   margin-top: 0.8rem;
   min-height: 30rem;
`;

const PatientsCareplan = () => {
   const [submenuTitle, setSubmenuTitle] = useState(ACTIVITIES_SUBMENU[0].id);

   return (
      <PatientCareplanContainerDiv>
         <div style={{ height: "10vh" }}>
            <Titles title={"Care Plan"} color={"var(--main-blue)"} />
            <div style={{ marginTop: "1rem" }}>
               <Submenu
                  submenulist={ACTIVITIES_SUBMENU}
                  setState={setSubmenuTitle}
               />
            </div>
         </div>
         {submenuTitle === ACTIVITIES_SUBMENU[0].id && (
            <PatientActivitiesGoals />
         )}
         {submenuTitle === ACTIVITIES_SUBMENU[1].id && <PatientTask />}
      </PatientCareplanContainerDiv>
   );
};

export default PatientsCareplan;
