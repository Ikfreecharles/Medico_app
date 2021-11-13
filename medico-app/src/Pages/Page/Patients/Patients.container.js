//imports external libraries
import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import { Route } from "react-router";

//imports from project
import PatientsPatients from "./Patients-components/Patients.patients";
import PatientDetailsContainer from "./PatientDetails.container";
import { useSelector } from "react-redux";

const PatientOuterContainer = styled.section`
   padding: 0 0 0.4rem 0;
`;

const PatientDiv = styled.div`
   overflow: auto;
   visibility: hidden;
   &:hover: {
      visibility: visible;
   }

   div {
      visibility: visible;
   }
`;
const PatientDetailsDiv = styled.div`
   height: 100%;
   width: 100%;
   background-color: var(--main-white);
   border-radius: var(--border-radius);
   display: flex;
   align-items: center;
   justify-content: center;
   p {
      font-size: 3rem;
      color: var(--light-grey);
      opacity: 0.4;
      text-align: center;
   }
`;
const gridColumStyle = {
   padding: "0.4rem",
};

const Patients = () => {
   const patientId = useSelector((state) => state.form.patientId);
   return (
      <PatientOuterContainer>
         <Grid columns={3} style={{ margin: "0", height: "100%" }}>
            <Grid.Column
               mobile={16}
               tablet={4}
               computer={6}
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
               computer={10}
               style={gridColumStyle}
            >
               {patientId ? (
                  <Route
                     path="/patients/:id"
                     component={PatientDetailsContainer}
                  />
               ) : (
                  <PatientDetailsDiv>
                     <p>Select a patient to display.</p>
                  </PatientDetailsDiv>
               )}
            </Grid.Column>
         </Grid>
      </PatientOuterContainer>
   );
};

export default Patients;
