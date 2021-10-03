//import from external libraries
import { Switch, Route } from "react-router-dom";

//import from within the project
import PatientVitalCareplan from "./Patient-vitals-subfolder/Patient.vital-careplan";
import PatientActivity from "./Patient-vitals-subfolder/Patient.activity";
import PatientCheckup from "./Patient-vitals-subfolder/Patient.checkup";

const PatientVitalsContainer = ({ path }) => {
   return (
      <Switch>
         <Route exact path={path} component={PatientVitalCareplan} />
         <Route
            exact
            path={path && `${path}/vitals/vital & care plan`}
            component={PatientVitalCareplan}
         />
         <Route
            exact
            path={`${path}/vitals/activity`}
            component={PatientActivity}
         />
         <Route
            exact
            path={`${path}/vitals/checkup`}
            component={PatientCheckup}
         />
      </Switch>
   );
};

export default PatientVitalsContainer;
