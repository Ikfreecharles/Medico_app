import { gql } from "@apollo/client";

export const GET_ALL_PATIENT = gql`
   query {
      getAllPatients {
         id
         firstName
         lastName
         admittedDate
         status
         examination {
            marker
            examination
         }
         diagnosis
         recovery
         test
      }
   }
`;

export const GET_ALL_PATIENT_MIN = gql`
   query {
      getAllPatients {
         id
         firstName
         lastName
         dob
         test
      }
   }
`;
export const GET_ALL_PATIENT_ACTIVITIES = gql`
   query Query($patientId: ID!) {
      getAllPatientActivities(patientId: $patientId) {
         id
         activity
         progress
      }
   }
`;
