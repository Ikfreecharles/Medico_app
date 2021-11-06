import UserAvatarDetails from "../../../../Components/Patient-Component/UserAvatarDetails.component";
import UserDetails from "../../../../Components/Patient-Component/UserDetails.component";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import { SingleUserDetails } from "../../../../Redux/SingleUserDetails";
import styled from "styled-components";

const headingcolor = "var(--main-lightgrey)";
const bodycolor = "var(--main-blue)";

const PatientFullDetailsContainer = styled.section`
   border-radius: var(--border-radius);
   background-color: var(--main-white);
   height: auto;
   margin-bottom: 0.8rem;
   padding: 2rem;
`;

const DetailsDivContainer = styled.div`
   margin: 2rem 0 0 0;
`;

const UserDetailsDiv = styled.div`
   display: flex;
   flex-wrap: wrap;
`;

const PatientsFulldetails = () => {
   const {
      userAvatar,
      Name,
      Dob,
      Gender,
      PatientID,
      Address,
      PreferredCommunication,
      Language,
      Insurance,
      Conditions,
      Medications,
      Allergies,
      LastAppointment,
   } = SingleUserDetails;

   const listArray = (array) => {
      return array.join(", ");
   };

   const listObject = (object) => {
      return Object.values(object);
   };

   return (
      <PatientFullDetailsContainer>
         <Titles title={"About Patient"} color={"var(--main-blue)"} />
         <DetailsDivContainer>
            <UserAvatarDetails
               useravatar={userAvatar}
               fullname={Name}
               age={Dob}
               gender={Gender}
               namecolor={"var(--main-grey)"}
               userdetailscolor={"var(--main-grey)"}
            />
            <UserDetailsDiv>
               <UserDetails
                  userheading={"Patient ID"}
                  userbody={PatientID}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
               <UserDetails
                  userheading={"Address"}
                  userbody={Address}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
               <UserDetails
                  userheading={"Preferred Communication"}
                  userbody={PreferredCommunication}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
               <UserDetails
                  userheading={"Language"}
                  userbody={listArray(Language)}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
               <UserDetails
                  userheading={"Insurance"}
                  userbody={listObject(Insurance)}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
               <UserDetails
                  userheading={"Conditions"}
                  userbody={listArray(Conditions)}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
               <UserDetails
                  userheading={"Medications"}
                  userbody={listArray(Medications)}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
               <UserDetails
                  userheading={"Allergies"}
                  userbody={listArray(Allergies)}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
               <UserDetails
                  userheading={"Last Appointment"}
                  userbody={LastAppointment}
                  headingcolor={headingcolor}
                  bodycolor={bodycolor}
               />
            </UserDetailsDiv>
         </DetailsDivContainer>
      </PatientFullDetailsContainer>
   );
};

export default PatientsFulldetails;
