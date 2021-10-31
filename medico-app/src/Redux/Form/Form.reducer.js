import { formTypes } from "./Form.types";

const INITIAL_STATE = {
   count: 1,
   patientId: "",
};

const formReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case formTypes.INCREASE_CURRENT_STEP:
         return { ...state, count: state.count + 1 };

      case formTypes.DECREASE_CURRENT_STEP:
         return { ...state, count: state.count - 1 };

      case formTypes.SET_PATIENTID:
         return { ...state, patientId: action.payload };

      default:
         return state;
   }
};

export default formReducer;
