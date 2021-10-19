//imports from external libraries
import styled from "styled-components";

//imports from within the project
import Titles from "../../../../../Components/Dashboard-Component/Titles.component";
import PatientVitalsCardComponent from "../../../../../Components/Patient-Component/PatientVitalsCard.component";
import { SingleUserDetails } from "../../../../../Redux/SingleUserDetails";

const vitaltypecolor = "#306EF6";

const VitalsTitleContainer = styled.div`
   margin-bottom: 2rem;
`;

const VitalCardContainer = styled.div`
   display: flex;
   justify-content: space-between;
`;

const PatientVitalCareplan = () => {
   const { Vitals } = SingleUserDetails;
   return (
      <>
         <VitalsTitleContainer>
            <Titles title={"Vitals"} color={"#306EF6"} />
         </VitalsTitleContainer>
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
                     vitaltypecolor={vitaltypecolor}
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

export default PatientVitalCareplan;
