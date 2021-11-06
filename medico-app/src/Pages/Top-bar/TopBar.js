//imports from external libraries
import styled from "styled-components";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

//imports from within the project
import Avatar from "../../Components/Dashboard-Component/Avatar.component";
import { doctorImage } from "../../Redux/Image.profile";
import SearchField from "../../Components/Dashboard-Component/Search.component";
import ViewAllButton from "../../Components/Dashboard-Component/ViewAllButton.component";
import {
   openCreatePatientModal,
   openGoalsForm,
   openMessage,
   openNotification,
   openProfileOption,
} from "../../Redux/Modals/Modals.actions";
import ProfileModal from "../Modals/Modal-pages/Profile.modal";
import NotificationModal from "../Modals/Modal-pages/Notification.modal";
import CreatePatientForm from "../../Components/Form-Component/Forms/CreatePatient.form";
import ModalContainer from "../Modals/ModalContainer.modal";
import { openPatientVitalEditModal } from "../../Redux/Modals/Modals.actions";
import AddVitalForm from "../../Components/Form-Component/Forms/AddVital.form";
import DeletePatientModal from "../Modals/Modal-pages/DeletePatient.modal";
import AddActivityForm from "../../Components/Form-Component/Forms/AddActivity.form";
import NewGoalsModal from "../Modals/Modal-pages/NewGoals.modal";
import AddNewGoalsForm from "../../Components/Form-Component/Forms/AddNewGoals.form";

const TopBarContainer = styled.section`
   display: flex;
   align-items: center;
   justify-content: right;
   border-radius: var(--border-radius);
   background-color: var(--main-white);
   padding: 1rem 0;
   position: relative;

   @media only screen and (max-width: 500px) {
      display: block;
   }
`;

const InnerContainer = styled.div`
   display: flex;
   align-items: center;
`;

const TimeBar = styled.p`
   font-size: 1.2rem;
   border: 1px solid #e8e8e8;
   padding: 0.75rem 2rem;
   border-radius: 3px;
   margin: 0 0 0 2rem;

   @media only screen and (max-width: 500px) {
      margin: 0;
   }
`;
const DoctorName = styled.h2`
   font-size: 1.2rem;
   margin: 0 2rem;
   letter-spacing: -0.5px;
   font-weight: 600;
`;

const ViewAllContainer = styled.div`
   margin-right: 1rem;

   @media only screen and (max-width: 500px) {
      display: none;
   }
`;

const IconContainer = styled.div`
   height: 100%;
   width: 4rem;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #fff;
   margin-right: -1px;
   svg {
      cursor: pointer;
   }
`;
const iconStyle = {
   fontSize: "2rem",
};

const AvatarDiv = styled.div`
   padding: 0 1rem;
   cursor: pointer;
`;

function TopBar() {
   const dispatch = useDispatch();
   const openProfileOptions = useSelector(
      (state) => state.modal.openProfileOptions
   );
   const openNotifications = useSelector(
      (state) => state.modal.openNotification
   );
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
      <TopBarContainer>
         <SearchField />
         <TimeBar>{moment().format("LLLL")}</TimeBar>
         <InnerContainer>
            <DoctorName>Welcome, Dr Savannah</DoctorName>
            <ViewAllContainer
               onClick={() => dispatch(openCreatePatientModal())}
            >
               <ViewAllButton
                  color={"var(--main-white)"}
                  backgroundcolor={"var(--main-green)"}
                  text={"Create new patient".toLocaleUpperCase()}
               />
            </ViewAllContainer>
            <ViewAllContainer>
               <ViewAllButton
                  color={"var(--main-white)"}
                  link={"Appointments"}
                  backgroundcolor={"var(--main-blue)"}
                  text={"Make an appointment".toUpperCase()}
               />
            </ViewAllContainer>
            <IconContainer>
               <NotificationsRoundedIcon
                  style={iconStyle}
                  onClick={() => dispatch(openNotification())}
               />
            </IconContainer>
            <IconContainer>
               <EmailRoundedIcon
                  style={iconStyle}
                  onClick={() => dispatch(openMessage())}
               />
            </IconContainer>
            <AvatarDiv onClick={() => dispatch(openProfileOption())}>
               <Avatar
                  dimension={"50px"}
                  backgroundimage={doctorImage.doctor}
               />
            </AvatarDiv>
         </InnerContainer>
         {openProfileOptions && <ProfileModal />}
         {openNotifications && <NotificationModal />}

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
      </TopBarContainer>
   );
}

export default TopBar;
