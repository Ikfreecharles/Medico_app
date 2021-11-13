//imports from external libraries
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AlertPopupComponent from "../../../../../Components/Form-Component/AlertPopup.component";

//import from within the project
import TableWithAccordionComponent from "../../../../../Components/Patient-Component/TableWithAccordion.component";
import { GET_ONE_PATIENT_ACTIVITY } from "../../../../../GraphQL/Queries.graphql";

const PatientActivitiesGoalsContainer = styled.div`
   height: 70%;
   overflow-y: auto;
`;

const PatientActivitiesGoals = () => {
   const patientId = useSelector((state) => state.form.patientId);
   const { loading, error, data } = useQuery(GET_ONE_PATIENT_ACTIVITY, {
      variables: { getOnePatientId: patientId },
   });

   if (loading) return <CircularProgress />;
   if (error)
      return (
         <AlertPopupComponent
            isOpen={true}
            severity={"error"}
            errorTitle={"An error has occured"}
            errorMessage={error.message}
         />
      );

   return (
      <PatientActivitiesGoalsContainer>
         <TableWithAccordionComponent data={data.getOnePatient} />
      </PatientActivitiesGoalsContainer>
   );
};

export default PatientActivitiesGoals;
