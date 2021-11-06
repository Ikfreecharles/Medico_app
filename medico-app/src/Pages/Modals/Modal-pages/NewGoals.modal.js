//imports from external libraries
import { useQuery } from "@apollo/client";
import { CircularProgress, LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { useDispatch } from "react-redux";

//imports from within the project
import Titles from "../../../Components/Dashboard-Component/Titles.component";
import ViewAllButton from "../../../Components/Dashboard-Component/ViewAllButton.component";
import AlertPopupComponent from "../../../Components/Form-Component/AlertPopup.component";
import { GET_ALL_PATIENT_ACTIVITIES } from "../../../GraphQL/Queries.graphql";
import { handleActions } from "../../../Utils/Functions.utils";
import {
   openGoalsForm,
   selectedPatientOptionId,
   setActivityId,
} from "../../../Redux/Modals/Modals.actions";
import FormContainerForm from "../../../Components/Form-Component/Forms/FormContainer.form";

const NewGoalModalDiv = styled.div`
   ul {
      li {
         list-style-type: none;
         margin: 0 0 1.5rem;

         div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            p {
               width: 25rem;
               margin: 0;
               font-size: 1.2rem;
            }

            svg {
               font-size: 2.5rem;
               cursor: pointer;
               color: var(--main-green);
               transition: all 0.4s ease-in;
               &:hover {
                  color: var(--main-blue);
                  opacity: 0.7;
               }
            }
         }
      }
   }
`;

const NoActivityDiv = styled.div`
   p {
      margin: 1rem 0;
      font-size: 1rem !important;
   }
   form {
      display: flex;
      justify-content: center;
   }
`;

const NewGoalsModal = () => {
   const patientIdFromStore = useSelector((state) => state.form.patientId);
   const dispatch = useDispatch();
   const { loading, error, data } = useQuery(GET_ALL_PATIENT_ACTIVITIES, {
      variables: { patientId: patientIdFromStore },
   });
   if (loading) return <CircularProgress />;
   if (data)
      return (
         <>
            {data.getAllPatientActivities.length > 0 ? (
               <FormContainerForm
                  formtitle={"Edit Patient"}
                  title={"Patient Activities"}
                  subtitle={"Edit an Activity or add a new goal"}
                  subheadingcolor={"var(--main-blue)"}
                  buttoncolor={"var(--main-green)"}
                  handleCancel={() => handleActions(dispatch, [])}
                  handleSubmit={() =>
                     handleActions(dispatch, [selectedPatientOptionId], 4)
                  }
               >
                  {error && (
                     <AlertPopupComponent
                        isOpen={true}
                        severity={"error"}
                        errorMessage={error.message}
                        errorTitle={"An error has occured"}
                     />
                  )}
                  <NewGoalModalDiv>
                     <ul>
                        {data.getAllPatientActivities.map((activities) => {
                           const { id, activity, progress } = activities;
                           return (
                              <li key={id}>
                                 <div>
                                    <p>{activity}</p>

                                    <AddCircleRoundedIcon
                                       onClick={() =>
                                          handleActions(
                                             dispatch,
                                             [setActivityId, openGoalsForm],
                                             id
                                          )
                                       }
                                    />
                                 </div>
                                 <LinearProgress
                                    variant="determinate"
                                    value={progress}
                                 />
                              </li>
                           );
                        })}
                     </ul>
                  </NewGoalModalDiv>
               </FormContainerForm>
            ) : (
               <NoActivityDiv>
                  <Titles color={"var(--main-blue)"} title={"Activities"} />
                  <p>No activities found. Click below to add an activity</p>
                  <div
                     onClick={() =>
                        handleActions(dispatch, [selectedPatientOptionId], 4)
                     }
                  >
                     <ViewAllButton
                        backgroundcolor={"var(--main-green)"}
                        color={"var(--main-white)"}
                        text={"Add Activity"}
                     />
                  </div>
               </NoActivityDiv>
            )}
         </>
      );
};

export default NewGoalsModal;
