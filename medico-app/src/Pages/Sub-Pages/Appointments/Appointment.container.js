import { useState } from "react";
import { useMutation } from "@apollo/client";
import ViewAllButton from "../../../Components/Dashboard-Component/ViewAllButton.component";
import FormFieldComponent from "../../../Components/TopBar-Component/FormField.component";
import { CREATE_PATIENT } from "../../../GraphQL/Mutations.graphql";
import { CircularProgress } from "@mui/material";

const Appointment = () => {
   const [patient, setPatient] = useState({
      patientID: "",
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      preferredCommunication: "",
      language: [],
      conditions: [],
      medications: [],
      allergies: [],
      lastAppointment: "",
      status: 0,
      diagnosis: "",
      recovery: 0,
      test: 0,
   });
   const [createUser, { data, loading, error }] = useMutation(CREATE_PATIENT);
   const handleSubmit = async (e) => {
      try {
         e.preventDefault();
         console.log(patient);
         await createUser({ variables: { input: patient } });
      } catch (error) {
         console.log(error);
      }
   };

   const handleChange = (e) => {
      setPatient((patient) => ({
         ...patient,
         [e.target.name]:
            e.target.type === "number"
               ? parseInt(e.target.value)
               : e.target.value,
      }));
   };

   if (loading) return <CircularProgress />;
   if (error) return <h2>{(error.message, error)}</h2>;
   return (
      <form onSubmit={(e) => handleSubmit(e)}>
         <FormFieldComponent
            label={"Patient ID*"}
            type={"text"}
            inputName={"patientID"}
            placeholderText={"Patient ID"}
            value={patient.patientID}
            onChange={(e) => handleChange(e)}
            required
         />
         <FormFieldComponent
            label={"First name*"}
            type={"text"}
            inputName={"firstName"}
            placeholderText={"First name"}
            value={patient.firstName}
            onChange={(e) => handleChange(e)}
            required
         />
         <FormFieldComponent
            label={"Last name*"}
            type={"text"}
            inputName={"lastName"}
            placeholderText={"Last name"}
            value={patient.lastName}
            onChange={(e) => handleChange(e)}
            required
         />
         <FormFieldComponent
            label={"Date of birth*"}
            type={"date"}
            inputName={"dob"}
            placeholderText={"Date of birth"}
            value={patient.dob}
            onChange={(e) => handleChange(e)}
            required
         />
         <FormFieldComponent
            label={"gender*"}
            type={"text"}
            inputName={"gender"}
            placeholderText={"Gender"}
            value={patient.gender}
            onChange={(e) => handleChange(e)}
            required
         />
         <FormFieldComponent
            label={"Phone number*"}
            type={"tel"}
            inputName={"preferredCommunication"}
            placeholderText={"+4915217473772"}
            value={patient.preferredCommunication}
            onChange={(e) => handleChange(e)}
         />
         <FormFieldComponent
            label={"Languages"}
            type={"text"}
            inputName={"language"}
            placeholderText={"Languages"}
            value={patient.language}
            onChange={(e) => handleChange(e)}
         />
         <FormFieldComponent
            label={"Last Appointment"}
            type={"date"}
            inputName={"lastAppointment"}
            placeholderText={"Date"}
            value={patient.lastAppointment}
            onChange={(e) => handleChange(e)}
         />
         <FormFieldComponent
            label={"Treatment Status"}
            type={"number"}
            inputName={"status"}
            placeholderText={"Status"}
            value={patient.status}
            onChange={(e) => handleChange(e)}
         />
         <FormFieldComponent
            label={"Recovery"}
            type={"number"}
            inputName={"recovery"}
            placeholderText={"Recovery"}
            value={patient.recovery}
            onChange={(e) => handleChange(e)}
         />

         <FormFieldComponent
            label={"Test"}
            type={"number"}
            inputName={"test"}
            placeholderText={"Test"}
            value={patient.test}
            onChange={(e) => handleChange(e)}
         />
         <ViewAllButton
            backgroundcolor={"var(--main-blue)"}
            color={"var(--main-white)"}
            text={"Submit".toUpperCase()}
         />
      </form>
   );
};

export default Appointment;
