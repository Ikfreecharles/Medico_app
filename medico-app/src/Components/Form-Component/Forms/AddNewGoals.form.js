//imports from external libraries
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { CircularProgress } from "@mui/material";

//imports from within the project
import { NEWGOALS } from "../../../Inputs/AddNewGoals.input";
import {
   handleActions,
   handleChange,
   handleSubmit,
   mutationCallback,
} from "../../../Utils/Functions.utils";
import FormFieldComponent from "../FormField.component";
import {
   openPatientVitalEditModal,
   setActivityId,
} from "../../../Redux/Modals/Modals.actions";
import { NEWGOALS_STATE } from "../../../Utils/States.utils";
import AlertPopupComponent from "../AlertPopup.component";
import { ADD_GOAL } from "../../../GraphQL/Mutations.graphql";
import FormContainerForm from "./FormContainer.form";

const AddNewGoalsFormBody = styled.div`
   display: grid;
   grid-template-columns: auto auto;
   grid-gap: 1.5rem;
`;

const AddNewGoalsForm = () => {
   const activityId = useSelector((state) => state.modal.setActivityId);
   const dispatch = useDispatch();
   const [goals, setGoals] = useState({
      activityId: activityId,
      subject: "",
      priority: "",
      date: "",
      status: "",
      frequency: "",
   });
   const [addGoals, { loading, error }] = useMutation(ADD_GOAL, {
      onCompleted: async () => {
         await mutationCallback(setActivityId, activityId, dispatch, error, [
            openPatientVitalEditModal,
         ]);
      },
   });

   if (loading) return <CircularProgress />;
   return (
      <FormContainerForm
         formtitle={"Edit Patient"}
         title={"Add New Activity Goal"}
         subtitle={"Add a new goal for the selected activity"}
         subheadingcolor={"var(--main-blue)"}
         buttoncolor={"var(--main-green)"}
         handleCancel={() =>
            handleActions(dispatch, [openPatientVitalEditModal])
         }
         handleSubmit={async (e) =>
            handleSubmit(
               handleSubmit(e, addGoals, goals, setGoals, NEWGOALS_STATE)
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
         <AddNewGoalsFormBody>
            {NEWGOALS.map((goal) => {
               return (
                  <FormFieldComponent
                     key={goal.id}
                     {...goal}
                     value={goals[goal.name]}
                     onChange={(e) =>
                        goal.name !== "activityId" &&
                        handleChange(e, setGoals, goals)
                     }
                  />
               );
            })}
         </AddNewGoalsFormBody>
      </FormContainerForm>
   );
};

export default AddNewGoalsForm;
