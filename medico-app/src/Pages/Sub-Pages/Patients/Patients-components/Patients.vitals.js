//imports from external libraries
import styled from "styled-components";
import { useState } from "react";

//imports from within the project
import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import PatientVitalCareplan from "./Patient-vitals/Patient.vital-careplan";
import PatientActivity from "./Patient-vitals/Patient.activity";
import PatientCheckup from "./Patient-vitals/Patient.checkup";

const PatientVitalsContainerDiv = styled.section`
   padding: 2rem;
   background-color: #fff;
   border-radius: 1rem;
`;

const submenu = [
   { id: "1", title: "Vital & Care Plan" },
   { id: "2", title: "Activity" },
   { id: "3", title: "Check up" },
];
const PatientsVitals = () => {
   const [submenuTitle, setSubmenuTitle] = useState(submenu[0].id);
   console.log(submenuTitle);

   return (
      <PatientVitalsContainerDiv>
         <div>
            <Submenu
               submenulist={submenu}
               width={"60%"}
               component={
                  (PatientVitalCareplan, PatientActivity, PatientCheckup)
               }
               setState={setSubmenuTitle}
            />

            {submenuTitle === submenu[0].id && <PatientVitalCareplan />}
            {submenuTitle === submenu[1].id && <PatientActivity />}

            {submenuTitle === submenu[2].id && <PatientCheckup />}
         </div>
      </PatientVitalsContainerDiv>
   );
};

export default PatientsVitals;
