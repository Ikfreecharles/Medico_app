import UserAvatarDetails from "../../../../Components/Patient-Component/UserAvatarDetails.component";
import UserDetails from "../../../../Components/Patient-Component/UserDetails.component";
import Titles from "../../../../Components/Dashboard-Component/Titles.component";
import { SingleUserDetails } from "../../../../Redux/SingleUserDetails";
import styled from "styled-components";

const headingcolor = "#009CF4";
const bodycolor = "#797979";
const PatientFullDetailsContainer = styled.section`
   padding: 2rem;
   border: 1px solid #eee;
   border-radius: 30px;
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
            userdetailscolor={"#797979"}
         />
         <UserDetails
            userheading={"MAN'"}
            userbody={Man}
            headingcolor={headingcolor}
            bodycolor={bodycolor}
         />
         <UserDetails
            userheading={"Address'"}
            userbody={Address}
            headingcolor={headingcolor}
            bodycolor={bodycolor}
         />
         <UserDetails
            userheading={"Preferred Communication'"}
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
            userheading={"Insurance'"}
            userbody={listObject(Insurance)}
            headingcolor={headingcolor}
            bodycolor={bodycolor}
         />
         <UserDetails
            userheading={"Conditions'"}
            userbody={listArray(Conditions)}
            headingcolor={headingcolor}
            bodycolor={bodycolor}
         />
         <UserDetails
            userheading={"Medications'"}
            userbody={listArray(Medications)}
            headingcolor={headingcolor}
            bodycolor={bodycolor}
         />
         <UserDetails
            userheading={"Allergies'"}
            userbody={listArray(Allergies)}
            headingcolor={headingcolor}
            bodycolor={bodycolor}
         />
         <UserDetails
            userheading={"Last Appointment'"}
            userbody={LastAppointment}
            headingcolor={headingcolor}
            bodycolor={bodycolor}
         />
      </PatientFullDetailsContainer>
   );
};

export default PatientsFulldetails;
