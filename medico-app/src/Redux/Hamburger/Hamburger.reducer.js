import { hamburgertypes } from "./Hamburger.types";

const INITIAL_STATE = {
   HamburgerToggle: true,
};

const hamburgerReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case hamburgertypes.HAMBURGER_TOGGLE:
         return { ...state, HamburgerToggle: !state.HamburgerToggle };

      default:
         return state;
   }
};

export default hamburgerReducer;
