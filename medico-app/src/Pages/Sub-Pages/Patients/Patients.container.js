//imports external libraries
import { Grid } from "semantic-ui-react";
import styled from "styled-components";

//imports from project
import PatientsFulldetails from "./Patients-components/Patients.fulldetails";
import PatientsPatients from "./Patients-components/Patients.patients";
import PatientsVitals from "./Patients-components/Patients.vitals";

const PatientOuterContainer = styled.section``;

const PatientInnerContainer = styled.section`
   padding: 2rem;
`;

const Patients = () => {
   return (
      <PatientOuterContainer>
         <PatientInnerContainer>
            <Grid columns={3}>
               <Grid.Column mobile={16} tablet={5} computer={5}>
                  <PatientsPatients />
               </Grid.Column>
               <Grid.Column mobile={16} tablet={4} computer={4}>
                  <PatientsFulldetails />
               </Grid.Column>
               <Grid.Column mobile={16} tablet={7} computer={7}>
                  <PatientsVitals />
               </Grid.Column>
            </Grid>
         </PatientInnerContainer>
      </PatientOuterContainer>
   );
};

export default Patients;
