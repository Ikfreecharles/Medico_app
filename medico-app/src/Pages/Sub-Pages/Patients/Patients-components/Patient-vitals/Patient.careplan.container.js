//import from external libraries
import { Switch, Route } from "react-router-dom";

//import from within the project
import PatientActivitiesGoals from "./Patient-vitals-subfolder/Patient.activitiesGoals";
import PatientTask from "./Patient-vitals-subfolder/Patient.task";

const PatientCareplanContainer = ({ path }) => {
   return (
      <Switch>
         <Route exact path={path} component={PatientActivitiesGoals} />
         <Route
            exact
            path={`${path}/vitals/activities & goals`}
            component={PatientActivitiesGoals}
         />
         <Route exact path={`${path}/vitals/task`} component={PatientTask} />
      </Switch>
   );
};

export default PatientCareplanContainer;
