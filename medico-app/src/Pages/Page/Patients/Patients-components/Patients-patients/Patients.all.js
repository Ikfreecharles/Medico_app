import TableComponent from "../../../../../Components/Dashboard-Component/Table.component";
import { GET_ALL_PATIENT_MIN } from "../../../../../GraphQL/Queries.graphql";
import { useTableHooks } from "../../../../../Hooks/Table.hooks";

const PatientAll = () => {
   const { PatientTableHeading, tableBody } = useTableHooks(
      GET_ALL_PATIENT_MIN,
      "getAllPatients"
   );

   console.log(tableBody);
   return (
      <div style={{ marginTop: "2rem" }}>
         {tableBody && (
            <TableComponent
               tableHeading={PatientTableHeading}
               tableBody={tableBody}
            />
         )}
      </div>
   );
};

export default PatientAll;
