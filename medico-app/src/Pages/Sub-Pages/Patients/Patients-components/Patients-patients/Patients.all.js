import TableComponent from "../../../../../Components/Dashboard-Component/Table.component";
import { PatientData } from "../../../../../Redux/Patient.data";

const PatientAll = () => {
   return (
      <div style={{ marginTop: "2rem" }}>
         <TableComponent tableData={PatientData} />
      </div>
   );
};

export default PatientAll;
