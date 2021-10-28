import { gql } from "@apollo/client";

export const CREATE_PATIENT = gql`
   mutation ($input: PatientInput) {
      createPatient(input: $input) {
         id
         firstName
      }
   }
`;
