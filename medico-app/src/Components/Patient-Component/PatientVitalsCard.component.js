import styled from "styled-components";

const PatientVitalComponentContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const VitalIconContainer = styled.div`
   height: 3rem;
   width: 3rem;
`;
const VitalIcon = styled.img`
   width: auto;
   height: 3rem;
`;

const VitalType = styled.p`
   color: ${(props) => props.vitaltypecolor};
   margin: 0.3rem 0 0;
`;

const VitalNumber = styled.p`
   font-size: 3rem;
   color: ${(props) => props.vitalnumbercolor};
   font-weight: bolder;
   margin: 0;
   line-height: 0.9;
`;

const VitalUnit = styled.p`
   color: ${(props) => props.vitalunitcolor};
   text-align: right;
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
         <div>
            <VitalNumber vitalnumbercolor={vitalnumbercolor}>
               {vitalnumber}
            </VitalNumber>
            <VitalUnit vitalunitcolor={vitalunitcolor}>{vitalunit}</VitalUnit>
         </div>
      </PatientVitalComponentContainer>
   );
};

export default PatientVitalsCardComponent;
