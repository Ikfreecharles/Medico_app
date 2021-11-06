import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VITAL } from "../../../Inputs/AddVital.input";
import { PATIENT_VITAL } from "../../../GraphQL/Mutations.graphql";
import { openPatientVitalEditModal } from "../../../Redux/Modals/Modals.actions";
import {
   handleActions,
   handleChange,
   handleSubmit,
   mutationCallback,
} from "../../../Utils/Functions.utils";
import { PATIENT_VITAL_STATE } from "../../../Utils/States.utils";
import AlertPopupComponent from "../AlertPopup.component";
import FormFieldComponent from "../FormField.component";
import { setPatientId } from "../../../Redux/Form/Form.action";
import { usePatientId } from "../../../Hooks/Form.hooks";
import FormContainerForm from "./FormContainer.form";

const AddVitalFormBody = styled.div`
   margin-top: 1.5rem;
   display: grid;
   grid-template-columns: auto auto;
   grid-gap: 1.5rem;
`;

const AddVitalForm = () => {
   const dispatch = useDispatch();
   const patientIdFromStore = useSelector((state) => state.form.patientId);
   const [patientVital, setPatientVital] = useState({
      patientId: patientIdFromStore,
      vitalType: "",
      vitalNumber: "",
   });
   usePatientId(setPatientVital, patientVital, patientIdFromStore);

   const [createVital, { loading, error }] = useMutation(PATIENT_VITAL, {
      onCompleted: async (data) => {
         await mutationCallback(
            setPatientId,
            data.createVital.id,
            dispatch,
            error,
            [openPatientVitalEditModal]
         );
      },
   });
   if (loading) return <CircularProgress />;

   return (
      <FormContainerForm
         formtitle={"Edit Patient"}
         title={"Patient Vitals"}
         subtitle={"Add a new patient vital or edit an existing vital"}
         subheadingcolor={"var(--main-blue)"}
         buttoncolor={"var(--main-green)"}
         handleCancel={() =>
            handleActions(dispatch, [openPatientVitalEditModal])
         }
         handleSubmit={async (e) =>
            handleSubmit(
               e,
               createVital,
               patientVital,
               setPatientVital,
               PATIENT_VITAL_STATE
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

         {VITAL.slice(0, 1).map((patientVitals) => {
            return (
               <FormFieldComponent
                  key={patientVitals.id}
                  {...patientVitals}
                  value={patientVital[patientVitals.name]}
                  onChange={(e) =>
                     patientVitals.name !== "patientId" &&
                     handleChange(e, setPatientVital, patientVital)
                  }
               />
            );
         })}
         <AddVitalFormBody>
            {VITAL.slice(1).map((patientVitals) => {
               return (
                  <FormFieldComponent
                     key={patientVitals.id}
                     {...patientVitals}
                     value={patientVital[patientVitals.name]}
                     onChange={(e) =>
                        patientVitals.name !== "patientId" &&
                        handleChange(e, setPatientVital, patientVital)
                     }
                  />
               );
            })}
         </AddVitalFormBody>
      </FormContainerForm>
   );
};

export default AddVitalForm;
