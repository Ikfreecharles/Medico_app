//imports from external libraries
import { useState } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import { INSURANCE_STATE } from "../../../Utils/States.utils";
import { useDispatch, useSelector } from "react-redux";

//imports from within the project
import FormFieldComponent from "../FormField.component";
import {
   handleActions,
   handleChange,
   handleSubmit,
   mutationCallback,
} from "../../../Utils/Functions.utils";
import { INSURANCE_INPUT } from "../../../GraphQL/Mutations.graphql";
import { CircularProgress } from "@mui/material";
import { INSURANCE } from "../../../Inputs/AddInsurance.input";
import {
   formIncreaseStep,
   resetFormStep,
   setPatientId,
} from "../../../Redux/Form/Form.action";
import AlertPopupComponent from "../AlertPopup.component";
import { usePatientId } from "../../../Hooks/Form.hooks";
import FormContainerForm from "./FormContainer.form";
import { openCreatePatientModal } from "../../../Redux/Modals/Modals.actions";

const PatientInsuranceDiv = styled.div`
   margin-top: 1.5rem;
   display: grid;
   grid-template-columns: auto auto;
   grid-gap: 1.5rem;
`;

const AddInsuranceForm = ({ currentStep }) => {
   const patientId = useSelector((state) => state.form.patientId);
   const dispatch = useDispatch();
   const [insurance, setInsurance] = useState({
      patientId: patientId,
      insuranceName: "",
      insuranceNumber: "",
   });

   //hook to set patient id in the form incase of error
   usePatientId(setInsurance, insurance, patientId);

   const [createInsurance, { loading, error }] = useMutation(INSURANCE_INPUT, {
      onCompleted: async (data) => {
         await mutationCallback(
            setPatientId,
            data.createInsurance.id,
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
         title={"Add Patient Insurance Details"}
         subtitle={`- Step ${currentStep} of 4 -`}
         subheadingcolor={"var(--main-blue)"}
         buttoncolor={"var(--main-green)"}
         handleCancel={() =>
            handleActions(dispatch, [openCreatePatientModal, resetFormStep])
         }
         handleSubmit={(e) =>
            handleSubmit(
               e,
               createInsurance,
               insurance,
               setInsurance,
               INSURANCE_STATE
            )
         }
         buttons
      >
         <div>
            {error && (
               <AlertPopupComponent
                  isOpen={true}
                  severity={"error"}
                  errorMessage={error.message}
                  errorTitle={"An error has occured"}
               />
            )}

            {INSURANCE.slice(0, 1).map((patientInsurance) => {
               return (
                  <FormFieldComponent
                     key={patientInsurance.id}
                     {...patientInsurance}
                     value={insurance[patientInsurance.name]}
                     onChange={(e) =>
                        patientInsurance.name !== "patientId" &&
                        handleChange(e, setInsurance, insurance)
                     }
                  />
               );
            })}
            <PatientInsuranceDiv>
               {INSURANCE.slice(1).map((patientInsurance) => {
                  return (
                     <FormFieldComponent
                        key={patientInsurance.id}
                        {...patientInsurance}
                        value={insurance[patientInsurance.name]}
                        onChange={(e) =>
                           patientInsurance.name !== "patientId" &&
                           handleChange(e, setInsurance, insurance)
                        }
                     />
                  );
               })}
            </PatientInsuranceDiv>
         </div>
      </FormContainerForm>
   );
};

export default AddInsuranceForm;
