//import from external libraries
import { useState } from "react";
import styled from "styled-components";

//import from within the project
import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import PatientActivitiesGoals from "./Patient-careplan/Patient.activitiesGoals";
import PatientTask from "./Patient-careplan/Patient.task";

const PatientCareplanContainerDiv = styled.section`
   padding: 2rem;
   background-color: #fff;
   border-radius: 1rem;
   margin-top: 0.8rem;
   height: 55vh;
`;

const submenu = [
   { id: "1", title: "Activities & Goal" },
   { id: "2", title: "Task Only" },
];

const PatientsCareplan = () => {
   const [submenuTitle, setSubmenuTitle] = useState(submenu[0].id);
   console.log(submenuTitle);
   return (
      <PatientCareplanContainerDiv>
         <div style={{ height: "10vh" }}>
            <Titles title={"Care Plan"} color={"#355DCF"} />

            <div style={{ marginTop: "1rem" }}>
               <Submenu
                  submenulist={submenu}
                  width={"50%"}
                  setState={setSubmenuTitle}
               />
            </div>
         </div>
         {submenuTitle === submenu[0].id && <PatientActivitiesGoals />}
         {submenuTitle === submenu[1].id && <PatientTask />}
      </PatientCareplanContainerDiv>
   );
};

export default PatientsCareplan;
