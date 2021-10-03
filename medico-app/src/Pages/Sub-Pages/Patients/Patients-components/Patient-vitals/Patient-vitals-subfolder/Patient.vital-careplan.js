//imports from external libraries
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";

//imports from within the project
import Titles from "../../../../../../Components/Dashboard-Component/Titles.component";
import PatientVitalsCardComponent from "../../../../../../Components/Patient-Component/PatientVitalsCard.component";
import { SingleUserDetails } from "../../../../../../Redux/SingleUserDetails";

const vitaltypecolor = "#D1D1D1";
const vitalunitcolor = "#797979";

const VitalsTitleContainer = styled.div`
   margin: 3rem 0;
`;

const VitalCardContainer = styled.div`
   display: flex;
   justify-content: space-between;
`;

const PatientVitalCareplan = () => {
   const { Vitals } = SingleUserDetails;
   return (
      <>
         {console.log(useRouteMatch())}
         <VitalsTitleContainer>
            <Titles title={"Vitals"} color={"#355DCF"} />
         </VitalsTitleContainer>
         <VitalCardContainer>
            {Vitals.map((vital) => {
               const { id, icon, vitalType, vitalNumber, unit, color } = vital;
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
      </>
   );
};

export default PatientVitalCareplan;
