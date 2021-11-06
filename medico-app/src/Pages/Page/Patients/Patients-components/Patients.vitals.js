//imports from external libraries
import styled from "styled-components";
import { useState } from "react";

//imports from within the project
import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import PatientActivity from "./Patient-vitals/Patient.activity";
import PatientCheckup from "./Patient-vitals/Patient.checkup";
import PatientVitals from "./Patient-vitals/Patient.vitals";

const PatientVitalsContainerDiv = styled.section`
   padding: 2rem;
   background-color: var(--main-white);
   border-radius: var(--border-radius);
`;

const submenu = [
   { id: "1", title: "Vitals" },
   { id: "2", title: "Activity" },
   { id: "3", title: "Check up" },
];
const PatientsVitals = () => {
   const [submenuTitle, setSubmenuTitle] = useState(submenu[0].id);
   console.log(submenuTitle);

   return (
      <PatientVitalsContainerDiv>
         <div>
            <Submenu submenulist={submenu} setState={setSubmenuTitle} />

            {submenuTitle === submenu[0].id && <PatientVitals />}
            {submenuTitle === submenu[1].id && <PatientActivity />}
            {submenuTitle === submenu[2].id && <PatientCheckup />}
         </div>
      </PatientVitalsContainerDiv>
   );
};

export default PatientsVitals;
