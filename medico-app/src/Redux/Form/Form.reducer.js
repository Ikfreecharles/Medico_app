import { formTypes } from "./Form.types";

const INITIAL_STATE = {
   step: 1,
   patientId: "",
};

const formReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case formTypes.INCREASE_CURRENT_STEP:
         return { ...state, step: state.step + 1 };

      case formTypes.DECREASE_CURRENT_STEP:
         return { ...state, step: state.step - 1 };
      case formTypes.RESET_FORM_STEP:
         return { ...state, step: 1 };

      case formTypes.SET_PATIENTID:
         return { ...state, patientId: action.payload };

      default:
         return state;
   }
};

export default formReducer;
