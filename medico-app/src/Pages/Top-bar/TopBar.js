import Avatar from "../../Components/Dashboard-Component/Avatar.component";
import { doctorImage } from "../../Redux/Image.profile";
import styled from "styled-components";
import { notificationicons, messageicons } from "../../Redux/Icons";
import SearchField from "../../Components/Dashboard-Component/Search.component";

const TopBarContainer = styled.section`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 2rem 3rem 0 2rem;
`;
const InnerContainer = styled.div`
   display: flex;
   align-items: center;
`;
const TimeBar = styled.p`
   font-size: 1.2rem;
`;
const DoctorName = styled.h2`
   font-size: 1.2rem;
   margin: 0 1rem;
`;
const Icon = styled.img`
   width: 20px;
`;
const IconContainer = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color: #396cff;
   display: flex;
   align-item: center;
   justify-content: center;
   margin: 0 1rem;
`;

function TopBar() {
   return (
      <TopBarContainer>
         <InnerContainer>
            <SearchField />
            <TimeBar>{new Date().toUTCString()}</TimeBar>
         </InnerContainer>
         <InnerContainer>
            <DoctorName>Welcome, Dr Savannah</DoctorName>
            <Icon
               src={notificationicons.notificationicon}
               alt={"notification icon"}
            />
            <IconContainer>
               <Icon src={messageicons.messageicon} alt={"message icon"} />
            </IconContainer>
            <Avatar dimension={"60px"} backgroundimage={doctorImage.doctor} />
         </InnerContainer>
      </TopBarContainer>
   );
}

export default TopBar;
