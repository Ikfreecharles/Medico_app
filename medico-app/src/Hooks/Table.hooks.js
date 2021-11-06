import moment from "moment";
import { generateBody } from "../Utils/TableFunctions.utils";
import getAge from "get-age";
import { useQuery } from "@apollo/client";
import { Alert, AlertTitle, CircularProgress } from "@mui/material";

//Create the table heading manually as necessary following the format
//{id:"Desired id", title: "Desired title", code:"match with item name from the db", minWidth:optional}
export const useTableHooks = (QUERY, queryName) => {
   const { loading, error, data } = useQuery(QUERY);
   if (loading) return <CircularProgress />;
   if (error)
      return (
         <Alert severity="error">
            <AlertTitle>An error has occured</AlertTitle>
            {error.message}
         </Alert>
      );
   const DashboardTableHeading = [
      { id: "1", title: "Patient name", code: "patientName", minWidth: 0 },
      {
         id: "2",
         title: "Admitted date",
         code: "modifiedAdmittedDate",
         minWidth: 0,
      },
      { id: "3", title: "Status", code: "status", minWidth: 0 },
      { id: "4", title: "Examination", code: "examination", minWidth: 0 },
      { id: "5", title: "Diagnosis", code: "diagnosis", minWidth: 0 },
      { id: "6", title: "Recovery", code: "recovery", minWidth: 0 },
      { id: "7", title: "Test", code: "test", minWidth: 0 },
      { id: "8", title: "Edit", code: "edit", width: 10 },
   ];

   const PatientTableHeading = [
      { id: "1", title: "Patient name", code: "patientName", minWidth: 0 },
      { id: "2", title: "Age", code: "newAge", minWidth: 0 },
      { id: "3", title: "Test", code: "test", minWidth: 0 },
      { id: "4", title: "Edit", code: "edit", minWidth: 0 },
   ];

   const patientActivityGoalsHeading = [
      { id: "1", title: "Patient name", code: "patientName", minWidth: 0 },
   ];

   const tableBody = [];
   data[queryName].map((data) => {
      return tableBody.push(generateBody(data, moment, getAge));
   });

   //return values from the hook
   return { DashboardTableHeading, tableBody, PatientTableHeading };
};
