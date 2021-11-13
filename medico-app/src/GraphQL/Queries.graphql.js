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
         examination {
            marker
            examination
         }
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

export const GET_ONE_PATIENT = gql`
   query Query($getOnePatientId: ID!) {
      getOnePatient(id: $getOnePatientId) {
         id
         firstName
         lastName
         dob
         gender
         address {
            address
            postCode
            state
         }
         preferredCommunication
         language
         insurance {
            insuranceName
            insuranceNumber
         }
         conditions
         medications
         allergies
         lastAppointment
         patientID
      }
   }
`;
export const GET_ONE_PATIENT_VITALS = gql`
   query Query($getOnePatientId: ID!) {
      getOnePatient(id: $getOnePatientId) {
         id
         vitals {
            id
            vitalType
            vitalNumber
            unit
            changeInfo
            changeDirection
         }
      }
   }
`;
export const GET_ONE_PATIENT_ACTIVITY = gql`
   query Query($getOnePatientId: ID!) {
      getOnePatient(id: $getOnePatientId) {
         id
         activities {
            id
            activity
            activitySince
            progress
            goals {
               id
               subject
               date
               status
               frequency
               priority
            }
         }
      }
   }
`;
