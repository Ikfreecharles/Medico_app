import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { useMemo, useState } from "react";
import AlertPopupComponent from "../Components/Form-Component/AlertPopup.component";

export const usePatientVitals = (QUERY, patientId) => {
   const [vitals, setVitals] = useState([]);
   const { loading, error, data } = useQuery(QUERY, {
      variables: { getOnePatientId: patientId },
   });
   useMemo(() => {
      if (loading) return <CircularProgress />;
      if (error) return <AlertPopupComponent />;
      setVitals(
         data.getOnePatient.vitals.map((vital) =>
            vital.vitalType === "Cholesterol"
               ? { ...vital, icon: "/icons/medical icons.svg" }
               : vital.vitalType === "Blood Pressure"
               ? { ...vital, icon: "/icons/medical icons-1.svg" }
               : vital.vitalType === "Heart Rate"
               ? { ...vital, icon: "/icons/medical icons-2.svg" }
               : vital.vitalType === "Glucose"
               ? { ...vital, icon: "/icons/medical icons-3.svg" }
               : vital
         )
      );
   }, [data, loading, error]);

   console.log(vitals);
   return { vitals, loading, error };
};
