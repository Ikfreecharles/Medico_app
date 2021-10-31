//imports from external libraries
import { useState } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import { CircularProgress, Alert, AlertTitle } from "@mui/material";
import { useDispatch } from "react-redux";

//imports from within the project
import ViewAllButton from "../../Dashboard-Component/ViewAllButton.component";
import FormFieldComponent from "../FormField.component";
import { CREATE_PATIENT } from "../../../GraphQL/Mutations.graphql";
import { PATIENT_STATE } from "../../../Utils/States.utils";
import {
   handleCancel,
   handleChange,
   handleSubmit,
   mutationCallback,
} from "../../../Utils/Functions.utils";
import Titles from "../../Dashboard-Component/Titles.component";
import { openCreatePatientModal } from "../../../Redux/Top-bar/Topbar.actions";
import {
   PATIENT_BASICS,
   PATIENT_MEDICALS,
} from "../../../Const/CreateNewPatient.hook";
import {
   formIncreaseStep,
   setPatientId,
} from "../../../Redux/Form/Form.action";

const FormInputContainer = styled.div`
   height: 85%;
   padding: 2rem;
   overflow-y: scroll;
`;
const TitleDivContainer = styled.div`
   width: 100%;
   border-bottom: 1px solid var(--light-grey);
   padding-bottom: 1rem;
   margin-bottom: 1rem;
`;

const PatientBasics = styled.div`
   display: grid;
   grid-template-columns: auto auto;
   margin-bottom: 3rem;
`;
const PatientMedicals = styled(PatientBasics)``;

const ButtonDivContainer = styled.div`
   display: flex;
   padding: 2rem;
   position: fixed;
   bottom: 0;
   left: 0;
   background-color: var(--main-white);
   width: 100%;
   button {
      margin-right: 1rem;
   }
`;

const CreateNewPatientForm = () => {
   const dispatch = useDispatch();
   const [patient, setPatient] = useState(PATIENT_STATE);
   const [createUser, { loading, error }] = useMutation(CREATE_PATIENT, {
      async onCompleted(data) {
         await mutationCallback(
            setPatientId,
            data.createPatient.id,
            dispatch,
            formIncreaseStep
         );
      },
   });

   if (loading) return <CircularProgress />;
   if (error)
      return (
         <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error.message}
         </Alert>
      );
   return (
      <form
         onSubmit={async (e) =>
            handleSubmit(e, createUser, patient, setPatient, PATIENT_STATE)
         }
         style={{ height: "100%" }}
      >
         <FormInputContainer>
            <TitleDivContainer>
               <Titles
                  title={"Create new patient"}
                  color={"var(--main-blue)"}
               />
            </TitleDivContainer>
            <PatientBasics>
               {PATIENT_BASICS.map((patientBasics) => {
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
            <TitleDivContainer>
               <Titles color={"var(--main-blue)"} title={"Medical status"} />
            </TitleDivContainer>
            <PatientMedicals>
               {PATIENT_MEDICALS.map((patientMedicals) => {
                  return (
                     <FormFieldComponent
                        key={patientMedicals.id}
                        {...patientMedicals}
                        value={patient[patientMedicals.name]}
                        onChange={(e) => handleChange(e, setPatient, patient)}
                     />
                  );
               })}
            </PatientMedicals>
         </FormInputContainer>
         <ButtonDivContainer>
            <div onClick={() => handleCancel(dispatch, openCreatePatientModal)}>
               <ViewAllButton
                  color={"var(--main-grey)"}
                  text={"Cancel".toUpperCase()}
                  outline={true}
                  outlinecolor={"var(--main-green)"}
                  type={"button"}
               />
            </div>
            <div>
               <ViewAllButton
                  backgroundcolor={"var(--main-blue)"}
                  color={"var(--main-white)"}
                  text={"Save".toUpperCase()}
                  type={"submit"}
               />
            </div>
         </ButtonDivContainer>
      </form>
   );
};

export default CreateNewPatientForm;
