import { dashboardTypes } from "./Topbar.types";

export const topbarTitleChange = (title) => ({
   type: dashboardTypes.DASHBOARD_TITLE,
   payload: title,
});
export const openCreatePatientModal = () => ({
   type: dashboardTypes.CREATE_NEW_PATIENT_MODAL,
});
export const openMessage = () => ({
   type: dashboardTypes.OPEN_MESSAGE,
});
export const openNotification = () => ({
   type: dashboardTypes.OPEN_NOTIFICATION,
});
export const openProfileOption = () => ({
   type: dashboardTypes.OPEN_PROFILE_OPTIONS,
});
