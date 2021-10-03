import { combineReducers } from "redux";
import topbarReducer from "./Top-bar/Topbar.reducer";
import hamburgerReducer from "./Hamburger/Hamburger.reducer";

const RootReducer = combineReducers({
   topBar: topbarReducer,
   hamburger: hamburgerReducer,
});

export default RootReducer;
