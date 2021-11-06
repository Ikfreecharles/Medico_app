import { modalTypes } from "./Modals.types";

const INITIAL_STATE = {
   title: "",
   createNewPatientModal: false,
   openMessage: false,
   openNotification: false,
   openProfileOptions: false,
   openEditPatient: false,
   openPatientVitalEditModal: false,
   selectedPatientOptionId: "",
   setActivityId: "",
   openGoalsForm: false,
};

const modalReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case modalTypes.DASHBOARD_TITLE:
         return { ...state, title: action.payload };

      case modalTypes.CREATE_NEW_PATIENT_MODAL:
         return {
            ...state,
            createNewPatientModal: !state.createNewPatientModal,
         };
      case modalTypes.OPEN_MESSAGE:
         return { ...state, openMessage: !state.openMessage };
      case modalTypes.OPEN_NOTIFICATION:
         return { ...state, openNotification: !state.openNotification };
      case modalTypes.OPEN_PROFILE_OPTIONS:
         return { ...state, openProfileOptions: !state.openProfileOptions };
      case modalTypes.OPEN_PATIENT_OPTIONS:
         return { ...state, openEditPatient: !state.openEditPatient };
      case modalTypes.OPEN_PATIENT_VITAL_EDIT_MODAL:
         return {
            ...state,
            openPatientVitalEditModal: !state.openPatientVitalEditModal,
         };
      case modalTypes.SELECTED_PATIENT_OPTION_ID:
         return { ...state, selectedPatientOptionId: action.payload };
      case modalTypes.SET_ACTIVITY_ID:
         return { ...state, setActivityId: action.payload };
      case modalTypes.OPEN_GOALS_FORM:
         return { ...state, openGoalsForm: !state.openGoalsForm };

      default:
         return state;
   }
};

export default modalReducer;
