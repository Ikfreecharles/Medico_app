//imports from external library
import { useMutation } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

//imports from within the project
import AlertPopupComponent from "../../../Components/Form-Component/AlertPopup.component";
import FormContainerForm from "../../../Components/Form-Component/Forms/FormContainer.form";
import { DELETE_PATIENT } from "../../../GraphQL/Mutations.graphql";
import { openPatientVitalEditModal } from "../../../Redux/Modals/Modals.actions";
import { handleActions } from "../../../Utils/Functions.utils";

const DeletePatientModal = () => {
   const patientIdToDelete = useSelector((state) => state.form.patientId);
   const dispatch = useDispatch();
   const [deletePatient, { loading, error }] = useMutation(DELETE_PATIENT);

   const handleDelete = async (e) => {
      try {
         e.preventDefault();
         await deletePatient({
            variables: { deletePatientId: patientIdToDelete },
         });
      } catch (error) {
         console.log(error);
      }
   };
   console.log(patientIdToDelete);
   if (loading) return <CircularProgress />;
   return (
      <FormContainerForm
         formtitle={"Delete Patient"}
         title={"Delete Patient Permanently"}
         subtitle={"Are you sure you want to delete this patient?"}
         subheadingcolor={"var(--main-red)"}
         buttoncolor={"var(--main-red)"}
         handleCancel={async () =>
            handleActions(dispatch, [openPatientVitalEditModal])
         }
         handleSubmit={async (e) => await handleDelete(e)}
         buttons
         buttonText={"Delete"}
      >
         {error && (
            <AlertPopupComponent
               isOpen={true}
               severity={"error"}
               errorMessage={error.message}
               errorTitle={"An error has occured"}
            />
         )}
      </FormContainerForm>
   );
};

export default DeletePatientModal;
