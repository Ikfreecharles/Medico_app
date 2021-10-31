//imports from external libraries
import styled from "styled-components";

//import from within the project
import TableWithAccordionComponent from "../../../../../Components/Patient-Component/TableWithAccordion.component";
import { useTableHooks } from "../../../../../Hooks/Table.hooks";
import { ActivitiesGoal } from "../../../../../Redux/ActivitiesGoals.data";

const PatientActivitiesGoalsContainer = styled.div`
   height: 70%;
   overflow-y: scroll;
`;

const PatientActivitiesGoals = () => {
   const { patientActivityGoalsHeading, tableBody } = useTableHooks(
      ActivitiesGoal.Goals
   );
   return (
      <PatientActivitiesGoalsContainer>
         {tableBody && (
            <TableWithAccordionComponent
               tableHead={patientActivityGoalsHeading}
               tableBody={tableBody}
            />
         )}
      </PatientActivitiesGoalsContainer>
   );
};

export default PatientActivitiesGoals;
