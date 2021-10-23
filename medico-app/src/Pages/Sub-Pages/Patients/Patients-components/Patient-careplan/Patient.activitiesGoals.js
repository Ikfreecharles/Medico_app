//imports from external libraries
import styled from "styled-components";

//import from within the project
import TableWithAccordionComponent from "../../../../../Components/Patient-Component/TableWithAccordion.component";

const PatientActivitiesGoalsContainer = styled.div`
   height: 70%;
   overflow-y: scroll;
`;

const PatientActivitiesGoals = () => {
   return (
      <PatientActivitiesGoalsContainer>
         <TableWithAccordionComponent />
      </PatientActivitiesGoalsContainer>
   );
};

export default PatientActivitiesGoals;
