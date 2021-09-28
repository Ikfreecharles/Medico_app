import { Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

const App = () => {
   return (
      <Switch>
         <div className="font-face-hn">
            <Home />
         </div>
      </Switch>
   );
};

export default App;
