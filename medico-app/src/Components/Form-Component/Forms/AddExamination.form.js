//imports from external libraries
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

//imports from within the project
import { EXAMINATION_STATE } from "../../../Utils/States.utils";
import { EXAMINATION_INPUT } from "../../../GraphQL/Mutations.graphql";
import FormFieldComponent from "../FormField.component";
import {
   handleActions,
   handleSubmit,
   mutationCallback,
} from "../../../Utils/Functions.utils";
import { EXAMINATION } from "../../../Inputs/AddExaminationInfo.input";
import { useDispatch, useSelector } from "react-redux";
import {
   formIncreaseStep,
   resetFormStep,
   setPatientId,
} from "../../../Redux/Form/Form.action";
import AlertPopupComponent from "../AlertPopup.component";
import { usePatientId } from "../../../Hooks/Form.hooks";
import FormContainerForm from "./FormContainer.form";
import { openCreatePatientModal } from "../../../Redux/Modals/Modals.actions";

const PatientExaminationDiv = styled.div`
   display: grid;
   grid-template-columns: auto auto;
   grid-gap: 1.5rem;
`;

const AddExaminationForm = ({ currentStep }) => {
   const dispatch = useDispatch();
   const patientId = useSelector((state) => state.form.patientId);
   const [examination, setExamination] = useState({
      patientId: patientId,
      marker: "",
      examination: "",
   });

   //hook to set patient id in the form incase of error
   usePatientId(setExamination, examination, patientId);

   const [createExamination, { loading, error }] = useMutation(
      EXAMINATION_INPUT,
      {
         onCompleted: async (data) => {
            await mutationCallback(
               setPatientId,
               data.createExamination.id,
               dispatch,
               error,
               [formIncreaseStep]
            );
         },
      }
   );

   const handleChangeSelect = (e) => {
      setExamination((examination) => ({
         ...examination,
         marker: parseInt(e.target.children[e.target.selectedIndex].id),
         examination: e.target.value,
      }));
   };

   if (loading) return <CircularProgress />;

   return (
      <FormContainerForm
         formtitle={"Create new Patient"}
         title={"Add Patient Examination Progess"}
         subtitle={`- Step ${currentStep} of 4 -`}
         subheadingcolor={"var(--main-blue)"}
         buttoncolor={"var(--main-green)"}
         handleCancel={() =>
            handleActions(dispatch, [openCreatePatientModal, resetFormStep])
         }
         handleSubmit={async (e) =>
            handleSubmit(
               e,
               createExamination,
               examination,
               setExamination,
               EXAMINATION_STATE
            )
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
         <PatientExaminationDiv>
            {EXAMINATION.map((examinations) => {
               return (
                  <FormFieldComponent
                     key={examinations.id}
                     {...examinations}
                     value={examination[examinations.name]}
                     onChange={
                        examinations.name !== "patientId" && handleChangeSelect
                     }
                  />
               );
            })}
         </PatientExaminationDiv>
      </FormContainerForm>
   );
};

export default AddExaminationForm;
