import { dashboardTypes } from "./Topbar.types";

const INITIAL_STATE = {
   title: "",
   createNewPatientModal: false,
   openMessage: false,
   openNotification: false,
   openProfileOptions: false,
};

const topbarReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case dashboardTypes.DASHBOARD_TITLE:
         return { ...state, title: action.payload };

      case dashboardTypes.CREATE_NEW_PATIENT_MODAL:
         return {
            ...state,
            createNewPatientModal: !state.createNewPatientModal,
         };
      case dashboardTypes.OPEN_MESSAGE:
         return { ...state, openMessage: !state.openMessage };
      case dashboardTypes.OPEN_NOTIFICATION:
         return { ...state, openNotification: !state.openNotification };
      case dashboardTypes.OPEN_PROFILE_OPTIONS:
         return { ...state, openProfileOptions: !state.openProfileOptions };

      default:
         return state;
   }
};

export default topbarReducer;
