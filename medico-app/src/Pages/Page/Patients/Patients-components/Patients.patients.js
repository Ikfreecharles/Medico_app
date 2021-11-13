//imports from external libraries
import { useState } from "react";
import styled from "styled-components";

//imports from with the project
import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import PatientsAll from "./Patients-patients/Patients.all";
import { PATIENT_SUBMENU } from "../../../../Inputs/Patient-inputs/Patients.input";

const PatientsPatientsContainer = styled.section`
   padding: 2rem;
   background-color: var(--main-white);
   border-radius: var(--border-radius);
   height: 100%;
   overflow-y: auto;
`;

const TitleSearchDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const PatientsPatients = () => {
   const [submenuTitle, setSubmenuTitle] = useState(PATIENT_SUBMENU[0].id);
   return (
      <PatientsPatientsContainer>
         <Submenu
            submenulist={PATIENT_SUBMENU}
            width={"100%"}
            setState={setSubmenuTitle}
         />
         <TitleSearchDiv>
            <Titles title={"All Patient"} color={"var(--main-blue)"} />
         </TitleSearchDiv>
         {submenuTitle === PATIENT_SUBMENU[0].id && <PatientsAll />}
      </PatientsPatientsContainer>
   );
};

export default PatientsPatients;
