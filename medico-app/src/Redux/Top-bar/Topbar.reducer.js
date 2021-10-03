import { dashboardTypes } from "./Topbar.types";

const INITIAL_STATE = {
   title: "",
};

const topbarReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case dashboardTypes.DASHBOARD_TITLE:
         return { ...state, title: action.payload };

      default:
         return state;
   }
};

export default topbarReducer;
