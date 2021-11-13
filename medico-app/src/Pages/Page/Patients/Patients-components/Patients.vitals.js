//imports from external libraries
import styled from "styled-components";
import { useState } from "react";

//imports from within the project
import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import PatientActivity from "./Patient-vitals/Patient.activity";
import PatientCheckup from "./Patient-vitals/Patient.checkup";
import PatientVitals from "./Patient-vitals/Patient.vitals";
import { VITALS_SUBMENU } from "../../../../Inputs/Patient-inputs/Patients.input";

const PatientVitalsContainerDiv = styled.section`
   padding: 2rem;
   background-color: var(--main-white);
   border-radius: var(--border-radius);
   min-height: 21rem;
`;

const PatientsVitals = () => {
   const [submenuTitle, setSubmenuTitle] = useState(VITALS_SUBMENU[0].id);

   return (
      <PatientVitalsContainerDiv>
         <div>
            <Submenu submenulist={VITALS_SUBMENU} setState={setSubmenuTitle} />

            {submenuTitle === VITALS_SUBMENU[0].id && <PatientVitals />}
            {submenuTitle === VITALS_SUBMENU[1].id && <PatientActivity />}
            {submenuTitle === VITALS_SUBMENU[2].id && <PatientCheckup />}
         </div>
      </PatientVitalsContainerDiv>
   );
};

export default PatientsVitals;
