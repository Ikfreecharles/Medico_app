import { combineReducers } from "redux";
import modalReducer from "./Modals/Modals.reducer";
import hamburgerReducer from "./Hamburger/Hamburger.reducer";
import formReducer from "./Form/Form.reducer";

const RootReducer = combineReducers({
   modal: modalReducer,
   hamburger: hamburgerReducer,
   form: formReducer,
});

export default RootReducer;
