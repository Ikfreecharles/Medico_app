//imports from external libraries
import { useSelector } from "react-redux";
import styled from "styled-components";

//imports from within the projects
import AddAddressForm from "./AddAddress.form";
import AddExaminationForm from "./AddExamination.form";
import AddInsuranceForm from "./AddInsurance.form";
import CreateNewPatientForm from "./CreateNewPatient.form";

const CreatePatientFormContainer = styled.div`
   height: 100%;
   width: 100%;
`;

const CreatePatientForm = () => {
   const currentStep = useSelector((state) => state.form.count);
   const patientId = useSelector((state) => state.form.patientId);
   return (
      <CreatePatientFormContainer>
         <h2>{`Step ${currentStep} of 4`}</h2>
         {currentStep === 1 && <CreateNewPatientForm />}
         {currentStep === 2 && patientId && <AddExaminationForm />}
         {currentStep === 3 && patientId && <AddInsuranceForm />}
         {currentStep === 4 && patientId && <AddAddressForm />}
      </CreatePatientFormContainer>
   );
};

export default CreatePatientForm;
