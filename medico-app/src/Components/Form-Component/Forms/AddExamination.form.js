//imports from external libraries
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { AlertTitle, Alert, CircularProgress } from "@mui/material";

//imports from within the project
import { EXAMINATION_STATE } from "../../../Utils/States.utils";
import { EXAMINATION_INPUT } from "../../../GraphQL/Mutations.graphql";
import FormFieldComponent from "../FormField.component";
import ViewAllButton from "../../Dashboard-Component/ViewAllButton.component";
import { handleSubmit, mutationCallback } from "../../../Utils/Functions.utils";
import Titles from "../../Dashboard-Component/Titles.component";
import { EXAMINATION } from "../../../Const/AddExaminationInfo.hook";
import { useDispatch, useSelector } from "react-redux";
import {
   formIncreaseStep,
   setPatientId,
} from "../../../Redux/Form/Form.action";

const AddExaminationFormContainer = styled.div``;

const AddExaminationForm = () => {
   const dispatch = useDispatch();
   const patientId = useSelector((state) => state.form.patientId);
   const [examination, setExamination] = useState({
      patientId: patientId,
      marker: "",
      examination: "",
   });

   const [createExamination, { loading, error }] = useMutation(
      EXAMINATION_INPUT,
      {
         onCompleted: async (data) => {
            await mutationCallback(
               setPatientId,
               data.createExamination.id,
               dispatch,
               formIncreaseStep
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
   if (error)
      return (
         <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error.message} — <strong>check it out!</strong>
         </Alert>
      );
   return (
      <AddExaminationFormContainer>
         <Titles
            title={"Add examination information"}
            color={"var(--main-blue)"}
         />
         <form
            onSubmit={async (e) =>
               handleSubmit(
                  e,
                  createExamination,
                  examination,
                  setExamination,
                  EXAMINATION_STATE
               )
            }
         >
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

            <ViewAllButton
               color={"var(--main-white)"}
               backgroundcolor={"var(--main-green)"}
               text={"Save".toUpperCase()}
            />
         </form>
      </AddExaminationFormContainer>
   );
};

export default AddExaminationForm;
