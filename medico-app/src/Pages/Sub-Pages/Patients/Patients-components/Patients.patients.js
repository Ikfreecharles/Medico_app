//imports from external libraries
import { useState } from "react";
import styled from "styled-components";

//imports from with the project
import SearchField from "../../../../Components/Dashboard-Component/Search.component";
import Submenu from "../../../../Components/Dashboard-Component/Submenu.component";
import TableComponent from "../../../../Components/Dashboard-Component/Table.component";
import { PatientData } from "../../../../Redux/Patient.data";

const PatientsPatientsContainer = styled.section`
   padding: 1rem;
   background-color: #fff;
   border-radius: 1rem;
`;

const PatientsPatients = () => {
   const [submenuTitle, setSubmenuTitle] = useState("");
   return (
      <PatientsPatientsContainer>
         <Submenu
            submenulist={[
               { id: "1", title: "All" },
               { id: "2", title: "Admitted" },
               { id: "3", title: "Registered" },
               { id: "4", title: "Discharged" },
            ]}
            width={"100%"}
            setState={setSubmenuTitle}
         />
         <SearchField />
         {submenuTitle === "All" ? (
            <TableComponent tableData={PatientData} />
         ) : (
            <TableComponent tableData={PatientData} />
         )}
      </PatientsPatientsContainer>
   );
};

export default PatientsPatients;
