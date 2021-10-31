//imports external libraries
import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import PatientsCareplan from "./Patients-components/Patients.careplan";

//imports from project
import PatientsFulldetails from "./Patients-components/Patients.fulldetails";
import PatientsPatients from "./Patients-components/Patients.patients";
import PatientsVitals from "./Patients-components/Patients.vitals";

const PatientOuterContainer = styled.section`
   padding: 0 0 0.4rem 0;
`;

const PatientDiv = styled.div`
   position: -webkit-sticky;
   position: sticky;
   top: 10rem;
   height: 83vh;
   overflow: auto;
   visibility: hidden;
   &:hover: {
      visibility: visible;
   }

   div {
      visibility: visible;
   }
`;

const gridColumStyle = {
   padding: "0.4rem",
};

const Patients = () => {
   return (
      <PatientOuterContainer>
         <Grid columns={3} style={{ margin: "0", height: "100%" }}>
            <Grid.Column
               mobile={16}
               tablet={4}
               computer={4}
               style={gridColumStyle}
            >
               <PatientDiv>
                  <div>
                     <PatientsPatients />
                  </div>
               </PatientDiv>
            </Grid.Column>

            <Grid.Column
               mobile={16}
               tablet={12}
               computer={12}
               style={gridColumStyle}
            >
               <PatientsFulldetails />
               <PatientsVitals />
               {/* <PatientsCareplan /> */}
            </Grid.Column>
         </Grid>
      </PatientOuterContainer>
   );
};

export default Patients;
