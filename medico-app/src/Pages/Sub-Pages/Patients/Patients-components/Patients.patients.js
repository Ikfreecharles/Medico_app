//imports from external libraries
import { useState } from "react";
import styled from "styled-components";

//imports from with the project
import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import { PatientData } from "../../../../Redux/Patient.data";
import PatientsAll from "./Patients-patients/Patients.all";

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

const submenu = [
   { id: "1", title: "All" },
   { id: "2", title: "Admitted" },
   { id: "3", title: "Registered" },
   { id: "4", title: "Discharged" },
];

const PatientsPatients = () => {
   const [submenuTitle, setSubmenuTitle] = useState(submenu[0].id);
   return (
      <PatientsPatientsContainer>
         <Submenu
            submenulist={submenu}
            width={"100%"}
            setState={setSubmenuTitle}
         />
         <TitleSearchDiv>
            <Titles title={"All Patient"} color={"var(--main-blue)"} />
         </TitleSearchDiv>
         {submenuTitle === submenu[0].id && (
            <PatientsAll patientData={PatientData} />
         )}
      </PatientsPatientsContainer>
   );
};

export default PatientsPatients;
