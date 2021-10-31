import { formTypes } from "./Form.types";

export const formIncreaseStep = () => ({
   type: formTypes.INCREASE_CURRENT_STEP,
});
export const formDecreaseStep = () => ({
   type: formTypes.DECREASE_CURRENT_STEP,
});
export const setPatientId = (patientId) => ({
   type: formTypes.SET_PATIENTID,
   payload: patientId,
});
