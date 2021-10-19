import styled from "styled-components";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const PatientVitalComponentContainer = styled.div``;

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
   margin: 1rem 0 0;
`;

const VitalNumber = styled.p`
   font-size: 2rem;
   color: #306ef6;
   margin: 0;
   line-height: 1.1;
   font-weight: 500;
`;

const ChangeContainer = styled.div`
   display: flex;
   align-items: center;
   margin-top: 0.5rem;
`;

const ChangeInfo = styled.p`
   color: #d2d2d2;
   font-size: 0.8rem;
   padding-left: 0.5rem;
   width: 60%;
`;

const PatientVitalsCardComponent = ({
   vitalicon,
   vitaltype,
   vitalnumber,
   vitaltypecolor,
   unit,
   changeInfo,
   changeDirection,
}) => {
   return (
      <PatientVitalComponentContainer>
         <VitalIconContainer>
            <VitalIcon src={vitalicon} alt={vitaltype} />
         </VitalIconContainer>
         <VitalType vitaltypecolor={vitaltypecolor}>{vitaltype}</VitalType>
         <div>
            <VitalNumber>
               {vitalnumber}
               {unit}
            </VitalNumber>
         </div>
         <ChangeContainer>
            {changeDirection === 1 && (
               <TrendingUpIcon
                  style={{ color: "#9CD5AD", fontSize: "1.6rem" }}
               />
            )}
            {changeDirection === 0 && (
               <TrendingDownIcon
                  style={{ color: "#DA615C", fontSize: "1.6rem" }}
               />
            )}
            <ChangeInfo>{changeInfo}</ChangeInfo>
         </ChangeContainer>
      </PatientVitalComponentContainer>
   );
};

export default PatientVitalsCardComponent;
