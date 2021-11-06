import { modalTypes } from "./Modals.types";

export const topbarTitleChange = (title) => ({
   type: modalTypes.DASHBOARD_TITLE,
   payload: title,
});
export const openCreatePatientModal = () => ({
   type: modalTypes.CREATE_NEW_PATIENT_MODAL,
});
export const openMessage = () => ({
   type: modalTypes.OPEN_MESSAGE,
});
export const openNotification = () => ({
   type: modalTypes.OPEN_NOTIFICATION,
});
export const openProfileOption = () => ({
   type: modalTypes.OPEN_PROFILE_OPTIONS,
});
export const openEditPatient = () => ({
   type: modalTypes.OPEN_PATIENT_OPTIONS,
});
export const openPatientVitalEditModal = () => ({
   type: modalTypes.OPEN_PATIENT_VITAL_EDIT_MODAL,
});
export const selectedPatientOptionId = (id) => ({
   type: modalTypes.SELECTED_PATIENT_OPTION_ID,
   payload: id,
});
export const setActivityId = (id) => ({
   type: modalTypes.SET_ACTIVITY_ID,
   payload: id,
});
export const openGoalsForm = () => ({
   type: modalTypes.OPEN_GOALS_FORM,
});
