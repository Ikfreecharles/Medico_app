import { gql } from "@apollo/client";

export const GET_ALL_PATIENT = gql`
   query {
      getAllPatients {
         id
         firstName
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
