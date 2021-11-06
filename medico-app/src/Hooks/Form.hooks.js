import { useEffect } from "react";

export const usePatientId = (setState, state, item) => {
   useEffect(() => {
      setState((state) => ({
         ...state,
         patientId: item,
      }));
   }, [item]);
};
