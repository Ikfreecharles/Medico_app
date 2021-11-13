import moment from "moment";
import { generateBody } from "../Utils/TableFunctions.utils";
import getAge from "get-age";
import { useQuery } from "@apollo/client";
import { Alert, AlertTitle, CircularProgress } from "@mui/material";

//Create the table heading manually as necessary following the format
//{id:"Desired id", title: "Desired title", code:"match with item name from the db", minWidth:optional}
export const useTableHooks = (QUERY, queryName, variable) => {
   const { loading, error, data } = useQuery(QUERY, {
      variables: { getOnePatientId: variable },
   });
   if (loading) return <CircularProgress />;
   if (error)
      return (
         <Alert severity="error">
            <AlertTitle>An error has occured</AlertTitle>
            {error.message}
         </Alert>
      );

   const tableBody = [];
   data &&
      data[queryName].map((data) => {
         return tableBody.push(generateBody(data, moment, getAge));
      });
   console.log(tableBody);

   //return values from the hook
   return { tableBody };
};
