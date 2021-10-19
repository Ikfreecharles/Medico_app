import TableComponent from "../../../../../Components/Dashboard-Component/Table.component";
import { PatientData } from "../../../../../Redux/Patient.data";

const PatientAll = () => {
   return <TableComponent tableData={PatientData} />;
};

export default PatientAll;
