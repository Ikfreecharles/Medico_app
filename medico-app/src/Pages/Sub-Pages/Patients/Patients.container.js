//imports external libraries
import { Route, useRouteMatch } from "react-router";
import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import PatientsCareplan from "./Patients-components/Patients.careplan";

//imports from project
import PatientsFulldetails from "./Patients-components/Patients.fulldetails";
import PatientsPatients from "./Patients-components/Patients.patients";
import PatientsVitals from "./Patients-components/Patients.vitals";

const PatientOuterContainer = styled.section``;

const PatientInnerContainer = styled.section`
   padding: 2rem 0.8rem;
`;

const Patients = () => {
   let { url } = useRouteMatch();
   console.log(url);
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
                  <Route path={url} component={PatientsVitals} />
                  <Route path={url} component={PatientsCareplan} />
               </Grid.Column>
            </Grid>
         </PatientInnerContainer>
      </PatientOuterContainer>
   );
};

export default Patients;
