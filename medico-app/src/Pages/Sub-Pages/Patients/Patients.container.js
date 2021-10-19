//imports external libraries
import { Route, useRouteMatch } from "react-router";
import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import PatientsCareplan from "./Patients-components/Patients.careplan";

//imports from project
import PatientsFulldetails from "./Patients-components/Patients.fulldetails";
import PatientsPatients from "./Patients-components/Patients.patients";
import PatientsVitals from "./Patients-components/Patients.vitals";

const PatientOuterContainer = styled.section`
   padding: 0.5rem 0;
   height: 85vh;
`;
const gridColumStyle = {
   padding: "0.4rem",
   height: "100%",
};

const Patients = () => {
   let { url } = useRouteMatch();
   console.log(url);
   return (
      <PatientOuterContainer>
         <Grid columns={3} style={{ margin: "0", height: "100%" }}>
            <Grid.Column
               mobile={16}
               tablet={5}
               computer={5}
               style={gridColumStyle}
            >
               <PatientsPatients />
            </Grid.Column>
            <Grid.Column
               mobile={16}
               tablet={4}
               computer={4}
               style={gridColumStyle}
            >
               <PatientsFulldetails />
            </Grid.Column>
            <Grid.Column
               mobile={16}
               tablet={7}
               computer={7}
               style={gridColumStyle}
            >
               <Route path={url} component={PatientsVitals} />
               <Route path={url} component={PatientsCareplan} />
            </Grid.Column>
         </Grid>
      </PatientOuterContainer>
   );
};

export default Patients;
