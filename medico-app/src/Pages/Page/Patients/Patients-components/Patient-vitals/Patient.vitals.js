//imports from external libraries
import styled from "styled-components";

//imports from within the project

import PatientVitalsCardComponent from "../../../../../Components/Patient-Component/PatientVitalsCard.component";
import { SingleUserDetails } from "../../../../../Redux/SingleUserDetails";

const VitalCardContainer = styled.div`
   display: flex;
`;

const PatientVitals = () => {
   const { Vitals } = SingleUserDetails;
   return (
      <>
         <VitalCardContainer>
            {Vitals.map((vital) => {
               const {
                  id,
                  icon,
                  vitalType,
                  vitalNumber,
                  unit,
                  changeInfo,
                  changeDirection,
               } = vital;
               return (
                  <PatientVitalsCardComponent
                     key={id}
                     vitalicon={icon}
                     vitaltype={vitalType}
                     vitalnumber={vitalNumber}
                     vitaltypecolor={"var(--main-blue)"}
                     unit={unit}
                     changeInfo={changeInfo}
                     changeDirection={changeDirection}
                  />
               );
            })}
         </VitalCardContainer>
      </>
   );
};

export default PatientVitals;
