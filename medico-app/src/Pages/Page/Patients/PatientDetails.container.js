import PatientsCareplan from "./Patients-components/Patients.careplan";
import PatientsFulldetails from "./Patients-components/Patients.fulldetails";
import PatientsVitals from "./Patients-components/Patients.vitals";

const PatientDetailsContainer = () => {
   return (
      <div>
         <PatientsFulldetails />
         <PatientsVitals />
         <PatientsCareplan />
      </div>
   );
};

export default PatientDetailsContainer;
