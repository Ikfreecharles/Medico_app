import TableComponent from "../../../../../../Components/Dashboard-Component/Table.component";
import { patientActivityGoalsHeading } from "../../../../../../Inputs/Table.input";

const PatientAccordionContentActivitiesGoals = ({ data }) => {
   return (
      <TableComponent
         tableHeading={patientActivityGoalsHeading}
         tableBody={data}
         defaultPagination={5}
      />
   );
};

export default PatientAccordionContentActivitiesGoals;
