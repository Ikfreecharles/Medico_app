//imports from external libraries
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { CircularProgress } from "@mui/material";

//imports from within the project
import FormFieldComponent from "../FormField.component";
import { ACTIVITY } from "../../../Inputs/AddActivity.input";
import { openPatientVitalEditModal } from "../../../Redux/Modals/Modals.actions";
import {
   handleActions,
   handleChange,
   handleSubmit,
   mutationCallback,
} from "../../../Utils/Functions.utils";
import { ACTIVITY_STATE } from "../../../Utils/States.utils";
import { ADD_ACTIVITIY } from "../../../GraphQL/Mutations.graphql";
import AlertPopupComponent from "../AlertPopup.component";
import { setPatientId } from "../../../Redux/Form/Form.action";
import FormContainerForm from "./FormContainer.form";

const AddActivityFormBody = styled.div`
   display: grid;
   grid-template-columns: auto auto;
   grid-gap: 1.5rem;
`;

const AddActivityForm = () => {
   const patientId = useSelector((state) => state.form.patientId);
   const dispatch = useDispatch();
   const [activity, setActivity] = useState({
      patientId: patientId,
      activity: "",
      activitySince: "",
      progress: "",
   });
   const [createActivity, { loading, error }] = useMutation(ADD_ACTIVITIY, {
      onCompleted: async (data) => {
         await mutationCallback(
            setPatientId,
            data.createActivity.id,
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
         title={"Add New Patient Activity"}
         subtitle={"Add a new target the patient wants to reach"}
         subheadingcolor={"var(--main-blue)"}
         buttoncolor={"var(--main-green)"}
         handleCancel={() =>
            handleActions(dispatch, [openPatientVitalEditModal])
         }
         handleSubmit={async (e) =>
            handleSubmit(
               e,
               createActivity,
               activity,
               setActivity,
               ACTIVITY_STATE
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
         <AddActivityFormBody>
            {ACTIVITY.map((activities) => {
               return (
                  <FormFieldComponent
                     key={activities.id}
                     {...activities}
                     value={activity[activities.name]}
                     onChange={(e) =>
                        activities.name !== "patientId" &&
                        handleChange(e, setActivity, activities)
                     }
                  />
               );
            })}
         </AddActivityFormBody>
      </FormContainerForm>
   );
};

export default AddActivityForm;
