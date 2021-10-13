//imports from external libraries
import styled from "styled-components";
import { useState } from "react";

//imports from within the project
import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import PatientVitalCareplan from "./Patient-vitals/Patient-vitals-subfolder/Patient.vital-careplan";
import PatientActivity from "./Patient-vitals/Patient-vitals-subfolder/Patient.activity";
import PatientCheckup from "./Patient-vitals/Patient-vitals-subfolder/Patient.checkup";

const PatientVitalsContainerDiv = styled.section`
   padding: 1rem;
   background-color: #fff;
   border-radius: 1rem;
`;

const PatientsVitals = () => {
   const [submenuTitle, setSubmenuTitle] = useState("");

   return (
      <PatientVitalsContainerDiv>
         <div>
            <Submenu
               submenulist={[
                  { id: "1", title: "Vital & Care Plan" },
                  { id: "2", title: "Activity" },
                  { id: "3", title: "Check up" },
               ]}
               width={"60%"}
               component={
                  (PatientVitalCareplan, PatientActivity, PatientCheckup)
               }
               setState={setSubmenuTitle}
            />

            {submenuTitle === "Vital & Care Plan" ? (
               <PatientVitalCareplan />
            ) : submenuTitle === "Activity" ? (
               <PatientActivity />
            ) : submenuTitle === "Check up" ? (
               <PatientCheckup />
            ) : (
               <PatientVitalCareplan />
            )}
         </div>
      </PatientVitalsContainerDiv>
   );
};

export default PatientsVitals;
