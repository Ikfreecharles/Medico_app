//imports from external libraries
import styled from "styled-components";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

//imports from within the project
import Avatar from "../../Components/Dashboard-Component/Avatar.component";
import { doctorImage } from "../../Redux/Image.profile";
import SearchField from "../../Components/Dashboard-Component/Search.component";
import ViewAllButton from "../../Components/Dashboard-Component/ViewAllButton.component";

const TopBarContainer = styled.section`
   display: flex;
   align-items: center;
   justify-content: right;

   background-color: #fff;
   padding: 1rem 0;

   @media only screen and (max-width: 500px) {
      display: block;
   }
`;

const InnerContainer = styled.div`
   display: flex;
   align-items: center;
`;

const TimeBar = styled.p`
   font-size: 1.2rem;
   border: 1px solid #e8e8e8;
   padding: 0.75rem 2rem;
   border-radius: 3px;
   margin: 0 0 0 2rem;

   @media only screen and (max-width: 500px) {
      margin: 0;
   }
`;
const DoctorName = styled.h2`
   font-size: 1.2rem;
   margin: 0 2rem;
   letter-spacing: -0.5px;
   font-weight: 600;
`;

const ViewAllContainer = styled.div`
   margin-right: 2rem;

   @media only screen and (max-width: 500px) {
      display: none;
   }
`;

const IconContainer = styled.div`
   height: 100%;
   width: 4rem;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #fff;
   margin-right: -1px;
`;
const iconStyle = {
   fontSize: "2rem",
};

const AvatarDiv = styled.div`
   padding: 0 1rem;
`;

function TopBar() {
   return (
      <TopBarContainer>
         <SearchField />
         <TimeBar>{new Date().toUTCString()}</TimeBar>
         <InnerContainer>
            <DoctorName>Welcome, Dr Savannah</DoctorName>
            <ViewAllContainer>
               <ViewAllButton
                  color={"#fff"}
                  link={"Appointments"}
                  backgroundcolor={"#306EF6"}
                  text={"Make an appointment".toUpperCase()}
               />
            </ViewAllContainer>
            <IconContainer>
               <NotificationsRoundedIcon style={iconStyle} />
            </IconContainer>
            <IconContainer>
               <EmailRoundedIcon style={iconStyle} />
            </IconContainer>
            <AvatarDiv>
               <Avatar
                  dimension={"50px"}
                  backgroundimage={doctorImage.doctor}
               />
            </AvatarDiv>
         </InnerContainer>
      </TopBarContainer>
   );
}

export default TopBar;
