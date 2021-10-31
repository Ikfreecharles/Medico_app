import { combineReducers } from "redux";
import topbarReducer from "./Top-bar/Topbar.reducer";
import hamburgerReducer from "./Hamburger/Hamburger.reducer";
import formReducer from "./Form/Form.reducer";

const RootReducer = combineReducers({
   topBar: topbarReducer,
   hamburger: hamburgerReducer,
   form: formReducer,
});

export default RootReducer;
