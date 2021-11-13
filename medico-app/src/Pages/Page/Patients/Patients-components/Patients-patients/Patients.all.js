import TableComponent from "../../../../../Components/Dashboard-Component/Table.component";
import { GET_ALL_PATIENT_MIN } from "../../../../../GraphQL/Queries.graphql";
import { useTableHooks } from "../../../../../Hooks/Table.hooks";
import { PatientTableHeading } from "../../../../../Inputs/Table.input";

const PatientAll = () => {
   const { tableBody } = useTableHooks(GET_ALL_PATIENT_MIN, "getAllPatients");

   return (
      <div style={{ marginTop: "2rem" }}>
         {tableBody && (
            <TableComponent
               tableHeading={PatientTableHeading}
               tableBody={tableBody}
               defaultPagination={5}
            />
         )}
      </div>
   );
};

export default PatientAll;
