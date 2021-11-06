//imports from external libraries
import { useSelector } from "react-redux";
import styled from "styled-components";

//imports from within the projects
import AddAddressForm from "./AddAddress.form";
import AddExaminationForm from "./AddExamination.form";
import AddInsuranceForm from "./AddInsurance.form";
import AddPatientBasicInfoForm from "./AddPatientBasicInfo.form";

const CreatePatientFormContainer = styled.div`
   width: auto;
`;

const CreatePatientForm = () => {
   const currentStep = useSelector((state) => state.form.step);
   const patientId = useSelector((state) => state.form.patientId);
   return (
      <CreatePatientFormContainer>
         {currentStep === 1 && (
            <AddPatientBasicInfoForm currentStep={currentStep} />
         )}
         {currentStep === 2 && patientId && (
            <AddExaminationForm currentStep={currentStep} />
         )}
         {currentStep === 3 && patientId && (
            <AddInsuranceForm currentStep={currentStep} />
         )}
         {currentStep === 4 && patientId && (
            <AddAddressForm currentStep={currentStep} />
         )}
      </CreatePatientFormContainer>
   );
};

export default CreatePatientForm;
