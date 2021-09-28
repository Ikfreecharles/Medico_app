import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import styled from "styled-components";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import { SingleUserDetails } from "../../../../Redux/SingleUserDetails";
import PatientVitalsCardComponent from "../../../../Components/Patient-Component/PatientVitalsCard.component";
import TableWithAccordionComponent from "../../../../Components/Patient-Component/TableWithAccordion.component";

const vitaltypecolor = "#D1D1D1";
const vitalunitcolor = "#797979";

const PatientVitalsContainer = styled.section`
   padding: 2rem;
   border: 1px solid #eee;
   border-radius: 30px;
`;

const SubmenuContainer = styled.div`
   width: 70%;
`;

const VitalsTitleContainer = styled.div`
   margin: 3rem 0;
`;

const VitalCardContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 90%;
`;

const PatientsVitals = () => {
   const { Vitals } = SingleUserDetails;
   return (
      <PatientVitalsContainer>
         <div>
            <SubmenuContainer>
               <Submenu
                  submenulist={["vital & care plan", "Activity", "Check up"]}
               />
            </SubmenuContainer>
            <VitalsTitleContainer>
               <Titles title={"Vitals"} color={"#355DCF"} />
            </VitalsTitleContainer>
            <VitalCardContainer>
               {Vitals.map((vital) => {
                  const { id, icon, vitalType, vitalNumber, unit, color } =
                     vital;
                  return (
                     <PatientVitalsCardComponent
                        key={id}
                        vitalicon={icon}
                        vitaltype={vitalType}
                        vitalnumber={vitalNumber}
                        vitalunit={unit}
                        vitaltypecolor={vitaltypecolor}
                        vitalnumbercolor={color}
                        vitalunitcolor={vitalunitcolor}
                     />
                  );
               })}
            </VitalCardContainer>
         </div>
         <div style={{ marginTop: "5rem" }}>
            <Titles title={"Care Plan"} color={"#355DCF"} />
            <div style={{ marginTop: "1rem" }}>
               <Submenu submenulist={["Activities & Goals", "Task Only"]} />
               <TableWithAccordionComponent />
            </div>
         </div>
      </PatientVitalsContainer>
   );
};

export default PatientsVitals;
