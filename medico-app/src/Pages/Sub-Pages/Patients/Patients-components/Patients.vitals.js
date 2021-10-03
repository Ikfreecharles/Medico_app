//imports from external libraries
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";

//imports from within the project
import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import PatientVitalsContainer from "./Patient-vitals/Patient.vitals.container";
import PatientCareplanContainer from "./Patient-vitals/Patient.careplan.container";

const PatientVitalsContainerDiv = styled.section`
   padding: 2rem;
   border: 1px solid #eee;
   border-radius: 5px;
`;

const SubmenuContainer = styled.div`
   width: 70%;
`;

const PatientsVitals = () => {
   let { url } = useRouteMatch();
   return (
      <PatientVitalsContainerDiv>
         <div>
            <SubmenuContainer>
               <Submenu
                  submenulist={{
                     id: "1",
                     menutitle: ["vital & care plan", "Activity", "Check up"],
                  }}
                  path={url}
                  subpath={"vitals"}
               />
            </SubmenuContainer>

            <PatientVitalsContainer path={url} />
         </div>
         <div style={{ marginTop: "5rem" }}>
            <Titles title={"Care Plan"} color={"#355DCF"} />

            <div style={{ width: "50%", marginTop: "1rem" }}>
               <Submenu
                  submenulist={{
                     id: "2",
                     menutitle: ["Activities & Goals", "Task Only"],
                  }}
                  path={url}
                  subpath={"vitals"}
               />
            </div>
            <PatientCareplanContainer path={url} />
         </div>
      </PatientVitalsContainerDiv>
   );
};

export default PatientsVitals;
