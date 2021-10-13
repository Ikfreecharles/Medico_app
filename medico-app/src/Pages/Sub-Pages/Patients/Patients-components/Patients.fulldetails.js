import UserAvatarDetails from "../../../../Components/Patient-Component/UserAvatarDetails.component";
import UserDetails from "../../../../Components/Patient-Component/UserDetails.component";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import { SingleUserDetails } from "../../../../Redux/SingleUserDetails";
import styled from "styled-components";

const headingcolor = "#000";
const PatientFullDetailsContainer = styled.section`
   padding: 1rem;
   border-radius: 1rem;
   background-color: #fff;
`;

const PatientsFulldetails = () => {
   const {
      userAvatar,
      Name,
      Dob,
      Gender,
      Man,
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
         <Titles title={"About Patient"} color={"#396CFF"} />
         <UserAvatarDetails
            useravatar={userAvatar}
            fullname={Name}
            age={Dob}
            gender={Gender}
            namecolor={"#797979"}
         />
         <UserDetails
            userheading={"MAN'"}
            userbody={Man}
            headingcolor={headingcolor}
         />
         <UserDetails
            userheading={"Address'"}
            userbody={Address}
            headingcolor={headingcolor}
         />
         <UserDetails
            userheading={"Preferred Communication'"}
            userbody={PreferredCommunication}
            headingcolor={headingcolor}
         />
         <UserDetails
            userheading={"Language"}
            userbody={listArray(Language)}
            headingcolor={headingcolor}
         />
         <UserDetails
            userheading={"Insurance'"}
            userbody={listObject(Insurance)}
            headingcolor={headingcolor}
         />
         <UserDetails
            userheading={"Conditions'"}
            userbody={listArray(Conditions)}
            headingcolor={headingcolor}
         />
         <UserDetails
            userheading={"Medications'"}
            userbody={listArray(Medications)}
            headingcolor={headingcolor}
         />
         <UserDetails
            userheading={"Allergies'"}
            userbody={listArray(Allergies)}
            headingcolor={headingcolor}
         />
         <UserDetails
            userheading={"Last Appointment'"}
            userbody={LastAppointment}
            headingcolor={headingcolor}
         />
      </PatientFullDetailsContainer>
   );
};

export default PatientsFulldetails;
