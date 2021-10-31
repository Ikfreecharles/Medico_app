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
