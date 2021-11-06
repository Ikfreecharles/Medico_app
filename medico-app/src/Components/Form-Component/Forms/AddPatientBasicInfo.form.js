//imports from external libraries
import { useState } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";

//imports from within the project
import FormFieldComponent from "../FormField.component";
import { CREATE_PATIENT } from "../../../GraphQL/Mutations.graphql";
import { PATIENT_STATE } from "../../../Utils/States.utils";
import {
   handleActions,
   handleChange,
   handleSubmit,
   mutationCallback,
} from "../../../Utils/Functions.utils";
import { openCreatePatientModal } from "../../../Redux/Modals/Modals.actions";
import {
   PATIENT_BASICS,
   PATIENT_MEDICALS,
} from "../../../Inputs/CreateNewPatient.input";
import {
   formIncreaseStep,
   setPatientId,
} from "../../../Redux/Form/Form.action";
import AlertPopupComponent from "../AlertPopup.component";
import FormContainerForm from "./FormContainer.form";

const TitleDivContainer = styled.div`
   width: 100%;
   padding: 4rem 0 3rem;
   margin-bottom: 1rem;
   h4 {
      font-size: 1.8rem;
      color: var(--main-blue);
      text-align: center;
   }
`;

const PatientBasics = styled.div`
   display: grid;
   grid-template-columns: auto auto;
   grid-gap: 1.5rem;
`;
const PatientBasicsTwo = styled(PatientBasics)`
   margin-top: 2rem;
   grid-template-columns: auto auto auto;
`;

const AddPatientBasicInfoForm = ({ currentStep }) => {
   const dispatch = useDispatch();
   const [patient, setPatient] = useState(PATIENT_STATE);
   const [createUser, { loading, error }] = useMutation(CREATE_PATIENT, {
      async onCompleted(data) {
         await mutationCallback(
            setPatientId,
            data.createPatient.id,
            dispatch,
            error,
            [formIncreaseStep]
         );
      },
   });

   if (loading) return <CircularProgress />;

   return (
      <FormContainerForm
         formtitle={"Create new Patient"}
         title={"Add Patient Basic Details"}
         subtitle={`- Step ${currentStep} of 4 -`}
         subheadingcolor={"var(--main-blue)"}
         buttoncolor={"var(--main-blue)"}
         handleCancel={() => handleActions(dispatch, [openCreatePatientModal])}
         handleSubmit={(e) =>
            handleSubmit(e, createUser, patient, setPatient, PATIENT_STATE)
         }
         buttons
      >
         {error && (
            <AlertPopupComponent
               isOpen={true}
               severity={"error"}
               errorMessage={error.message}
               errorTitle={"An error has occured"}
            />
         )}

         <PatientBasics>
            {PATIENT_BASICS.slice(0, 4).map((patientBasics) => {
               return (
                  <FormFieldComponent
                     key={patientBasics.id}
                     {...patientBasics}
                     value={patient[patientBasics.name]}
                     onChange={(e) => handleChange(e, setPatient, patient)}
                  />
               );
            })}
         </PatientBasics>
         <PatientBasicsTwo>
            {PATIENT_BASICS.slice(4).map((patientBasics) => {
               return (
                  <FormFieldComponent
                     key={patientBasics.id}
                     {...patientBasics}
                     value={patient[patientBasics.name]}
                     onChange={(e) => handleChange(e, setPatient, patient)}
                  />
               );
            })}
         </PatientBasicsTwo>
         <TitleDivContainer>
            <h4>Add Patient Medical Status</h4>
         </TitleDivContainer>
         <PatientBasics>
            {PATIENT_MEDICALS.slice(0, 6).map((patientMedicals) => {
               return (
                  <FormFieldComponent
                     key={patientMedicals.id}
                     {...patientMedicals}
                     value={patient[patientMedicals.name]}
                     onChange={(e) => handleChange(e, setPatient, patient)}
                  />
               );
            })}
         </PatientBasics>
         <PatientBasicsTwo>
            {PATIENT_MEDICALS.slice(6).map((patientMedicals) => {
               return (
                  <FormFieldComponent
                     key={patientMedicals.id}
                     {...patientMedicals}
                     value={patient[patientMedicals.name]}
                     onChange={(e) => handleChange(e, setPatient, patient)}
                  />
               );
            })}
         </PatientBasicsTwo>
      </FormContainerForm>
   );
};

export default AddPatientBasicInfoForm;
