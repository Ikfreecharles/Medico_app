//imports from external libraries
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AlertPopupComponent from "../../../../../Components/Form-Component/AlertPopup.component";

//imports from within the project
import PatientVitalsCardComponent from "../../../../../Components/Patient-Component/PatientVitalsCard.component";
import { GET_ONE_PATIENT_VITALS } from "../../../../../GraphQL/Queries.graphql";
import { usePatientVitals } from "../../../../../Hooks/PatientVitals.hooks";

const VitalCardContainer = styled.section`
   border-radius: var(--border-radius);
   background-color: var(--main-white);
   height: auto;
   margin-bottom: 0.8rem;
   padding: 2rem;
   display: flex;
`;

const PatientVitals = () => {
   const patientId = useSelector((state) => state.form.patientId);

   const { vitals, loading, error } = usePatientVitals(
      GET_ONE_PATIENT_VITALS,
      patientId
   );
   if (loading) return <CircularProgress />;
   if (error) return <AlertPopupComponent />;

   return (
      <>
         <VitalCardContainer>
            {vitals.map((vital) => {
               const {
                  id,
                  vitalType,
                  vitalNumber,
                  unit,
                  changeInfo,
                  changeDirection,
                  icon,
               } = vital;
               return (
                  <PatientVitalsCardComponent
                     key={id}
                     vitaltype={vitalType}
                     vitalnumber={vitalNumber}
                     vitaltypecolor={"var(--main-blue)"}
                     unit={unit}
                     changeInfo={changeInfo}
                     changeDirection={changeDirection}
                     vitalicon={icon}
                  />
               );
            })}
         </VitalCardContainer>
      </>
   );
};

export default PatientVitals;
