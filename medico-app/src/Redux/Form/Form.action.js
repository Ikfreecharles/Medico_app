import { formTypes } from "./Form.types";

export const formIncreaseStep = (setStep) => ({
   type: formTypes.INCREASE_CURRENT_STEP,
   payload: setStep,
});
export const formDecreaseStep = (setStep) => ({
   type: formTypes.DECREASE_CURRENT_STEP,
   payload: setStep,
});
export const resetFormStep = () => ({
   type: formTypes.RESET_FORM_STEP,
});
export const setPatientId = (patientId) => ({
   type: formTypes.SET_PATIENTID,
   payload: patientId,
});
