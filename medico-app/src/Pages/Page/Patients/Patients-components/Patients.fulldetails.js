import UserAvatarDetails from "../../../../Components/Patient-Component/UserAvatarDetails.component";
import UserDetails from "../../../../Components/Patient-Component/UserDetails.component";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_ONE_PATIENT } from "../../../../GraphQL/Queries.graphql";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import AlertPopupComponent from "../../../../Components/Form-Component/AlertPopup.component";

const headingcolor = "var(--main-lightgrey)";
const bodycolor = "var(--main-blue)";

const PatientFullDetailsContainer = styled.section`
   border-radius: var(--border-radius);
   background-color: var(--main-white);
   height: auto;
   margin-bottom: 0.8rem;
   padding: 2rem;
   min-height: 27rem;
`;

const DetailsDivContainer = styled.div`
   margin: 2rem 0 0 0;
`;

const UserDetailsDiv = styled.div`
   display: flex;
   flex-wrap: wrap;
`;
const listArray = (array) => {
   return array.join(", ");
};

const listObject = (object) => {
   return Object.values(object);
};

const PatientsFulldetails = () => {
   const patientId = useSelector((state) => state.form.patientId);
   const { loading, error, data } = useQuery(GET_ONE_PATIENT, {
      variables: { getOnePatientId: patientId },
   });

   if (loading) return <CircularProgress />;
   if (error)
      return (
         <AlertPopupComponent
            severity={"error"}
            isOpen={true}
            errorTitle={"An error has occured"}
            errorMessage={error.message}
         />
      );

   const {
      firstName,
      lastName,
      dob,
      gender,
      patientID,
      address,
      preferredCommunication,
      language,
      insurance,
      conditions,
      medications,
      allergies,
      lastAppointment,
   } = data.getOnePatient;
   return (
      <PatientFullDetailsContainer>
         <Titles title={"About Patient"} color={"var(--main-blue)"} />
         <DetailsDivContainer>
            <UserAvatarDetails
               firstName={firstName}
               lastName={lastName}
               age={dob}
               gender={gender}
               namecolor={"var(--main-grey)"}
               userdetailscolor={"var(--main-grey)"}
            />
            <UserDetailsDiv>
               <UserDetails
                  userheading={"Patient ID"}
                  userbody={patientID}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
               <UserDetails
                  userheading={"Address"}
                  userbody={listObject(address)}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
               <UserDetails
                  userheading={"Preferred Communication"}
                  userbody={preferredCommunication}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
               <UserDetails
                  userheading={"Language"}
                  userbody={listArray(language)}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
               <UserDetails
                  userheading={"Insurance"}
                  userbody={listObject(insurance)}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
               <UserDetails
                  userheading={"Conditions"}
                  userbody={listArray(conditions)}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
               <UserDetails
                  userheading={"Medications"}
                  userbody={listArray(medications)}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
               <UserDetails
                  userheading={"Allergies"}
                  userbody={listArray(allergies)}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
               <UserDetails
                  userheading={"Last Appointment"}
                  userbody={lastAppointment}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
            </UserDetailsDiv>
         </DetailsDivContainer>
      </PatientFullDetailsContainer>
   );
};

export default PatientsFulldetails;
