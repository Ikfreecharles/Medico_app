import styled from "styled-components";

const PatientVitalComponentContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 0 !important;
`;

const VitalIconContainer = styled.div`
   height: 3rem;
   width: 3rem;
   padding: 0 !important;
`;
const VitalIcon = styled.img`
   width: auto;
   height: 3rem;
`;

const VitalType = styled.p`
   color: ${(props) => props.vitaltypecolor};
   margin: 1rem 0 0;
`;

const VitalNumberUnitDiv = styled.div`
   padding: 0 !important;
`;

const VitalNumber = styled.p`
   font-size: 2.5rem;
   color: ${(props) => props.vitalnumbercolor};
   margin: 0;
   line-height: 1.1;
`;

const VitalUnit = styled.p`
   color: ${(props) => props.vitalunitcolor};
   text-align: left;
`;

const PatientVitalsCardComponent = ({
   vitalicon,
   vitaltype,
   vitalnumber,
   vitalunit,
   vitalnumbercolor,
   vitaltypecolor,
   vitalunitcolor,
}) => {
   return (
      <PatientVitalComponentContainer>
         <VitalIconContainer>
            <VitalIcon src={vitalicon} alt={vitaltype} />
         </VitalIconContainer>
         <VitalType vitaltypecolor={vitaltypecolor}>{vitaltype}</VitalType>
         <VitalNumberUnitDiv>
            <VitalNumber vitalnumbercolor={vitalnumbercolor}>
               {vitalnumber}
            </VitalNumber>
            <VitalUnit vitalunitcolor={vitalunitcolor}>{vitalunit}</VitalUnit>
         </VitalNumberUnitDiv>
      </PatientVitalComponentContainer>
   );
};

export default PatientVitalsCardComponent;
