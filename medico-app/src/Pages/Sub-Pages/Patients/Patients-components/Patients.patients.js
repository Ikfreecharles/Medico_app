import SearchField from "../../../../Components/Dashboard-Component/Search.component";
import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import TableComponent from "../../../../Components/Dashboard-Component/Table.component";
import { PatientData } from "../../../../Redux/Patient.data";
import styled from "styled-components";

const PatientsPatientsContainer = styled.section`
   padding: 2rem;
   border: 1px solid #eee;
   border-radius: 30px;
`;

const PatientsPatients = () => {
   return (
      <PatientsPatientsContainer>
         <Submenu
            submenulist={["All", "Admitted", "Registered", "Discharged"]}
         />
         <SearchField />
         <TableComponent tableData={PatientData} />
      </PatientsPatientsContainer>
   );
};

export default PatientsPatients;
