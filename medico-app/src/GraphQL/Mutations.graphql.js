import { gql } from "@apollo/client";

export const CREATE_PATIENT = gql`
   mutation ($input: PatientInput) {
      createPatient(input: $input) {
         id
         firstName
      }
   }
`;

export const INSURANCE_INPUT = gql`
   mutation CreateInsuranceMutation($input: InsuranceInput) {
      createInsurance(input: $input) {
         id
      }
   }
`;

export const EXAMINATION_INPUT = gql`
   mutation CreateExaminationMutation($input: ExaminationInput) {
      createExamination(input: $input) {
         id
      }
   }
`;

export const ADDRESS_INPUT = gql`
   mutation CreateAddressMutation($input: AddressInput) {
      createAddress(input: $input) {
         id
      }
   }
`;

export const PATIENT_VITAL = gql`
   mutation CreateVitalMutation($input: VitalInput) {
      createVital(input: $input) {
         id
      }
   }
`;

export const DELETE_PATIENT = gql`
   mutation DeletePatientMutation($deletePatientId: ID!) {
      deletePatient(id: $deletePatientId) {
         id
      }
   }
`;
export const ADD_ACTIVITIY = gql`
   mutation CreateActivityMutation($input: ActivityInput) {
      createActivity(input: $input) {
         id
      }
   }
`;
export const ADD_GOAL = gql`
   mutation AddGoalsMutation($input: GoalsInput) {
      addGoals(input: $input) {
         goals {
            frequency
         }
      }
   }
`;
