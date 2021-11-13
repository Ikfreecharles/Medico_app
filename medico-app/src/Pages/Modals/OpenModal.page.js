//imports from external libraries
import { useSelector, useDispatch } from "react-redux";

//imports from within the project
import CreatePatientForm from "../../Components/Form-Component/Forms/CreatePatient.form";
import ModalContainer from "../Modals/ModalContainer.modal";
import {
   openCreatePatientModal,
   openGoalsForm,
   openPatientVitalEditModal,
} from "../../Redux/Modals/Modals.actions";
import AddVitalForm from "../../Components/Form-Component/Forms/AddVital.form";
import DeletePatientModal from "../Modals/Modal-pages/DeletePatient.modal";
import AddActivityForm from "../../Components/Form-Component/Forms/AddActivity.form";
import NewGoalsModal from "../Modals/Modal-pages/NewGoals.modal";
import AddNewGoalsForm from "../../Components/Form-Component/Forms/AddNewGoals.form";

const OpenModalPage = () => {
   const dispatch = useDispatch();

   const openCreatePatient = useSelector(
      (state) => state.modal.createNewPatientModal
   );
   const openPatientVitalEdit = useSelector(
      (state) => state.modal.openPatientVitalEditModal
   );
   const selectedPatientOptionId = useSelector(
      (state) => state.modal.selectedPatientOptionId
   );
   const openGoalsForms = useSelector((state) => state.modal.openGoalsForm);
   return (
      <section>
         {openCreatePatient && (
            <ModalContainer
               open={openCreatePatient}
               dispatch={dispatch}
               actions={[openCreatePatientModal]}
            >
               <CreatePatientForm />
            </ModalContainer>
         )}
         {openPatientVitalEdit && selectedPatientOptionId === 2 && (
            <ModalContainer
               open={openPatientVitalEdit}
               dispatch={dispatch}
               actions={[openPatientVitalEditModal]}
            >
               <AddVitalForm />
            </ModalContainer>
         )}
         {openPatientVitalEdit && selectedPatientOptionId === 5 && (
            <ModalContainer
               open={openPatientVitalEdit}
               dispatch={dispatch}
               actions={[openPatientVitalEditModal]}
            >
               <DeletePatientModal />
            </ModalContainer>
         )}
         {openPatientVitalEdit && selectedPatientOptionId === 4 && (
            <ModalContainer
               open={openPatientVitalEdit}
               dispatch={dispatch}
               actions={[openPatientVitalEditModal]}
            >
               <AddActivityForm />
            </ModalContainer>
         )}
         {openPatientVitalEdit && selectedPatientOptionId === 3 && (
            <ModalContainer
               open={openPatientVitalEdit}
               dispatch={dispatch}
               actions={[openPatientVitalEditModal]}
            >
               <NewGoalsModal />
            </ModalContainer>
         )}
         {openGoalsForms && (
            <ModalContainer
               open={openPatientVitalEdit}
               dispatch={dispatch}
               actions={[openPatientVitalEditModal, openGoalsForm]}
            >
               <AddNewGoalsForm />
            </ModalContainer>
         )}
      </section>
   );
};

export default OpenModalPage;
